import React from "react";
import Navbar from "./navbar";

const Landing = () => {
  return (
    <>
      <div>
        <Navbar />
        <section className="pt-20 mt-14 h-[100svh] bg-navbarBlue text-white flex items-center justify-center py-24">
          <div className="container mx-auto flex flex-col md:flex-row items-center md:items-stretch md:justify-between px-4">
            {/* Left Side - Text */}
            <div className="md:w-1/2 text-center md:text-left px-4">
              <h1 className="text-4xl font-bold mb-4">
                Empowering Growth through Micro Loans
              </h1>
              <p className="text-lg mb-6">
                Affordable micro-loans designed to uplift individuals and small
                businesses.
              </p>
              <button className="bg-lightBlue text-slate-900 py-3 px-8 rounded-full font-semibold hover:bg-white hover:text-navbarBlue transition">
                Get Started
              </button>
            </div>

            <div
              className="md:w-1/2 h-full relative flex justify-center items-center overflow-hidden"
              style={{
                backgroundImage: 'url("/landingBg.webp")',
                backgroundSize: "cover",
                backgroundPosition: "center right",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-l from-navbarBlue opacity-80"></div>
            </div>
          </div>
        </section>

        {/* Brief Overview */}
        <section className="container mx-auto my-12 px-4 h-[80svh] text-center">
          <h2 className="text-3xl font-bold text-navbarBlue mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our SHG platform, apply for loans, and grow with us!
          </p>
          <div className="flex justify-around">
            <div className="w-1/3 p-4">
              <h3 className="text-xl font-semibold text-lightBlue">
                1. Join a SHG
              </h3>
              <p className="text-gray-700">
                Become part of our community to access resources and financial
                support.
              </p>
            </div>
            <div className="w-1/3 p-4">
              <h3 className="text-xl font-semibold text-lightBlue">
                2. Apply for a Loan
              </h3>
              <p className="text-gray-700">
                Submit your loan application with minimal paperwork.
              </p>
            </div>
            <div className="w-1/3 p-4">
              <h3 className="text-xl font-semibold text-lightBlue">
                3. Receive Funding
              </h3>
              <p className="text-gray-700">
                Get approved quickly and start using your funds for growth.
              </p>
            </div>
          </div>
        </section>

        {/* Success Stories and Testimonials */}
        <section className="bg-lightBlue h-[80svh] py-12">
          <div className="container mx-auto text-center text-navbarBlue">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-white mb-8">
              See how our micro-loans have made a difference.
            </p>
            <div className="flex justify-around">
              <div className="w-1/3 p-4 bg-white rounded shadow-md">
                <h3 className="text-xl font-semibold text-navbarBlue">
                  John's Small Business
                </h3>
                <p className="text-gray-600">
                  “This loan helped my bakery expand and hire more staff.”
                </p>
              </div>
              <div className="w-1/3 p-4 bg-white rounded shadow-md">
                <h3 className="text-xl font-semibold text-navbarBlue">
                  Amara's Store
                </h3>
                <p className="text-gray-600">
                  “I was able to purchase bulk stock and grow my customer base.”
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join a SHG */}
        <section className="container mx-auto h-[80svh] my-12 px-4 text-center">
          <h2 className="text-3xl font-bold text-navbarBlue mb-4">
            Why Join a SHG?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Joining a Self-Help Group offers support, resources, and financial
            inclusion.
          </p>
          <div className="flex justify-around">
            <div className="w-1/4 p-4">
              <h3 className="text-xl font-semibold text-lightBlue">
                Community Support
              </h3>
              <p className="text-gray-700">
                Mutual assistance and learning with like-minded individuals.
              </p>
            </div>
            <div className="w-1/4 p-4">
              <h3 className="text-xl font-semibold text-lightBlue">
                Access to Resources
              </h3>
              <p className="text-gray-700">
                Get educational and financial resources tailored to your needs.
              </p>
            </div>
            <div className="w-1/4 p-4">
              <h3 className="text-xl font-semibold text-lightBlue">
                Build Credit History
              </h3>
              <p className="text-gray-700">
                Improve your financial credibility within the group.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-navbarBlue text-white py-6">
          <div className="container mx-auto text-center">
            <p>
              &copy; {new Date().getFullYear()} SHG Micro Loans. All Rights
              Reserved.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="hover:text-lightBlue">
                Contact Us
              </a>
              <a href="#" className="hover:text-lightBlue">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-lightBlue">
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Landing;
