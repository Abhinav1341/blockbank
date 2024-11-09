// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


contract CommunityLending {
    struct User {
        address wallet;
        string name;
        uint creditScore;
        uint totalBorrowed;
        uint totalRepaid;
    }

    struct Loan {
        address borrower;
        uint amount;
        uint interest;
        uint dueDate;
        bool repaid;
    }

    // event LoanCreated(uint indexed loanIndex, address indexed borrower, uint amount, uint interest, uint dueDate);

    mapping(address => User) public users;
    mapping(address => Loan[]) public loans;
    uint public communityFunds;

    mapping(uint => string) public idToString;

    function checkStringMatch(uint _id, string memory input) public view returns (bool) {
        // for (uint i = 0; i < idToString.length; i++) { // Assuming a maximum of 100 entries for simplicity
            if (keccak256(abi.encodePacked(idToString[_id])) == keccak256(abi.encodePacked(input))) {
                return true;
            }
        // }
        return false;
    }

    // Register a new user
    function registerUser(string memory _name) public {
        require(users[msg.sender].wallet == address(0), "User already registered");
        users[msg.sender] = User(msg.sender, _name, 100, 0, 0);
    }

    // Access user profile
    function getUserProfile(address _wallet) public view returns (User memory) {
        return users[_wallet];
    }

    function getLoans(address _borrower) public view returns (Loan[] memory) {
        return loans[_borrower];
    }

    // Lend money to a user
    // Lend money to a user
    function lendMoney(address _borrower, uint _amount, uint _interest, uint _dueDate) public {
        // _amount *= 1 ether;
        // _interest *= 1 ether;
        require(users[_borrower].wallet != address(0), "Borrower not registered");
        require(users[_borrower].creditScore >= 50, "Borrower has low credit score");
        require(address(this).balance >= _amount, "Insufficient community funds");

        // Send Ether from the contract to the borrower's wallet
        payable(_borrower).transfer(_amount);

        // Update community funds
        communityFunds -= _amount;

        // Store loan details
        loans[_borrower].push(Loan(_borrower, _amount, _interest, _dueDate, false));
        users[_borrower].totalBorrowed += _amount;

        // uint loanIndex = loans[_borrower].length - 1;
    }

    // Repay loan
    function repayLoan(uint _loanIndex) public payable {
        Loan storage loan = loans[msg.sender][_loanIndex];
        require(!loan.repaid, "Loan already repaid");
        require(msg.value >= loan.amount + loan.interest, "Insufficient repayment amount");

        loan.repaid = true;
        users[msg.sender].totalRepaid += loan.amount;
        communityFunds += msg.value;
    }

    
    // Function to check the balance of the funds stored in the smart contract
    function getContractBalance() public view returns (uint) {
        return address(this).balance;
    }
    
    // Deposit funds to the community pool
    function depositFunds() public payable {
        communityFunds += msg.value;
    }

    // Withdraw funds from the community pool
    function withdrawFunds(uint _amount) public payable {
        require(communityFunds >= _amount, "Insufficient community funds");
        communityFunds -= _amount;
        payable(msg.sender).transfer(_amount);
    }
}