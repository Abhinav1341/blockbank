import React from "react";

const ModuleCard = ({ number, title, chapters, description, color }) => {
  return (
    <div className="border bg-blue-100 hover:cursor-pointer p-4 rounded-lg shadow-lg shadow-slate-300">
      <div className="flex items-center mb-2">
        <span className={`text-3xl font-bold text-${color}-600 mr-2`}>
          {number}
        </span>
        <div className={`border-t-4 border-${color}-600 flex-grow`}></div>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      {/* <p className="text-gray-600 mb-2">{chapters}</p> */}
      <p className="text-gray-600 mb-4">{description}</p>
      {/* <div className="flex space-x-4">
        <a href="#" className="text-blue-600">
          View module
        </a>
      </div> */}
    </div>
  );
};

export default ModuleCard;
