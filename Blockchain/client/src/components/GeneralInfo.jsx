import React from "react";
import GetProfile from "./GetProfile";
import GetContractBalance from "./GetContractBalance";

const GeneralInfo = ({ state }) => {
  return (
    <div>
      <GetProfile state={state} />
      <GetContractBalance state={state} />
    </div>
  );
};

export default GeneralInfo;
