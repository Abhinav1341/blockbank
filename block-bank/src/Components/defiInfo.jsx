import React from "react";
import ModuleCard from "./infoCard";
import { Link } from "react-router-dom";

const DeFiInfo = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Main />
    </div>
  );
};

const Main = () => {
  return (
    <main className="px-12 py-8">
      <h2 className="text-5xl font-bold mb-8">
        De-Fi and Micro-loans Awareness
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ModuleCard
          number="1"
          title="Introduction to DeFi"
          chapters="10 chapters"
          description="Learn the basics of decentralized finance, its role in disrupting traditional financial systems."
          color="green"
        />
        <ModuleCard
          number="2"
          title="Community Lending Models"
          chapters="12 chapters"
          description="Understand the concepts of decentralized community-based lending models and protocols."
          color="blue"
        />
        <ModuleCard
          number="3"
          title="Smart Contracts in DeFi"
          chapters="15 chapters"
          description="Explore how smart contracts automate and execute financial transactions in decentralized finance."
          color="yellow"
        />
        <ModuleCard
          number="4"
          title="Yield Farming & Liquidity Pools"
          chapters="8 chapters"
          description="Learn about yield farming, liquidity pools, and how they work in DeFi protocols."
          color="red"
        />
        <ModuleCard
          number="5"
          title="Risk Management in DeFi"
          chapters="10 chapters"
          description="Learn strategies to mitigate risks associated with decentralized finance."
          color="orange"
        />
        <ModuleCard
          number="6"
          title="DAO Governance"
          chapters="9 chapters"
          description="Understand the role of DAOs in decentralized governance and decision-making."
          color="purple"
        />
      </div>
      <div className="mt-8">
        <Link
          className=" text-slate-50 bg-emerald-600 px-6 py-3 rounded-md"
          to={"*"}
        >
          Back to Home Page
        </Link>
      </div>
    </main>
  );
};

export default DeFiInfo;
