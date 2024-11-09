import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Success from "./success";

const Landing = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className=" bg-aquaWhite">
        <nav
          className={`fixed w-full px-6 z-20 top-0 text-black opacity-75 ${
            isScrolled ? "bg-emerald-500" : "bg-transparent"
          } transition-all duration-300`}
        >
          <div className="flex justify-between items-center px-4 md:px-10 py-4 md:py-6 text-white">
            <div className="flex gap-3 md:gap-5 items-center">
              <img src="/icon.png" className="h-7 md:h-10" />
              <h1 className="text-lg md:text-2xl font-semibold">Block-Bank</h1>
            </div>
            <div className="flex gap-8"></div>
          </div>
        </nav>
        <section
          className="pt-20 h-[100svh] bg-emerald-800 text-white flex items-center justify-center py-24"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(0, 30, 3, 0.8), rgba(0, 30, 2, 0.1)), url("/landingBg.webp")',
            backgroundSize: "cover",
            backgroundPosition: "top right",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center md:items-stretch md:justify-between px-4">
            <div className="md:w-1/2 text-center md:text-left px-24 z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Empowering Growth through Micro Loans
              </h1>
              <p className="text-lg md:text-xl mb-6">
                Affordable micro-loans designed to uplift individuals and small
                businesses.
              </p>
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 align-baseline items-center">
                <Link
                  to={"/home"}
                  className="bg-emerald-400 text-slate-900 md:py-3 py-2 md:px-8 px-6 rounded-full font-semibold hover:bg-white hover:text-navbarBlue transition md:text-lg"
                >
                  Get Started
                </Link>
                <Link to={"/know_more"}>
                  <button className=" font-semibold underline">
                    What is DeFi?
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto my-20 px-4 h-[200svh] md:h-[75svh] text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-950 mb-4">
            How It Works
          </h2>
          <p className="md:text-xl text-sm text-gray-600 mb-8">
            Join our SHG platform, apply for loans, and grow with us!
          </p>
          <div className="flex flex-col md:flex-row px-24 gap-8 justify-around">
            <div className="w-1/3 h-[60svh] bg-white p-4 border items-center align-middle border-slate-400 cursor-pointer shadow-lg hover:shadow-xl ">
              <h3 className="text-2xl mt-2 font-semibold text-emerald-600">
                1. Join our SHG
              </h3>
              <img src="/SHG.gif" className="h-2/3 m-auto mt-4" />
              <p className="text-gray-700 text-lg">
                Become part of our community to access resources and financial
                support.
              </p>
            </div>
            <div className="w-1/3  h-[60svh] bg-white p-4 border border-slate-400 cursor-pointer shadow-lg hover:shadow-xl">
              <h3 className="text-2xl mt-2 font-semibold text-emerald-600">
                2. Apply for a Loan
              </h3>
              <img src="/Apply.gif" className="h-2/3 m-auto mt-4" />
              <p className="text-gray-700 text-lg">
                Submit your loan application with just a few clicks.
              </p>
            </div>
            <div className="w-1/3  h-[60svh] bg-white p-4 border border-slate-400 cursor-pointer shadow-lg hover:shadow-xl">
              <h3 className="text-2xl mt-2 font-semibold text-emerald-600">
                3. Receive Funding
              </h3>
              <img src="/Get.gif" className="h-2/3 m-auto mt-4" />
              <p className="text-gray-700 text-lg">
                Get approved quickly and start using your funds for growth.
              </p>
            </div>
          </div>
        </section>

        {/* Success Stories and Testimonials */}
        <section className="bg-emerald-700 h-[100svh] py-12">
          <div className="container mx-auto text-center text-navbarBlue">
            <h2 className="text-4xl text-white font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-slate-100 mb-8">
              See how our micro-loans have made a difference.
            </p>
            <Success />
            {/* <Marquee /> */}
            {/* <div className="flex justify-around">
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
            </div> */}
          </div>
        </section>

        {/* Why Join a SHG
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
        </section> */}

        {/* Footer */}
        <footer className="bg-emerald-950 text-white py-6">
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
