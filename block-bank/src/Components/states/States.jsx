import React from "react";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../data";
import TopBox from "../topBox/TopBox";
import ChartBox from "../chartBox/ChartBox";
import PieChartBox from "../pieCartBox/PieChartBox";
import BigChartBox from "../bigChartBox/BigChartBox";
import BarChartBox from "../barChartBox/BarChartBox";
import "./states.scss";

const States = () => {
  const handleGetDetails = () => {
    window.open("https://yashrajdps13.github.io/BlocHost/", "_blank");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center  ">Statistics</h1>
      <div className="home   grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Box 2 */}
        <div className="box box2">
          <ChartBox {...chartBoxUser} />
        </div>

        {/* Box 3 */}
        <div className="box box3">
          <ChartBox {...chartBoxProduct} />
        </div>

        {/* Box 5 */}
        <div className="box box5">
          <ChartBox {...chartBoxConversion} />
        </div>

        {/* Box 6 */}
        <div className="box box6">
          <ChartBox {...chartBoxRevenue} />
        </div>

        {/* Box 7 */}
        {/* <div className="box box7">
          <BigChartBox />
        </div> */}

        {/* Box 8 */}
        <div className="box box8">
          <BarChartBox {...barChartBoxVisit} />
        </div>

        {/* Box 9 */}
        <div className="box box9">
          <BarChartBox {...barChartBoxRevenue} />
        </div>
      </div>

      {/* Get Details Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleGetDetails}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-200"
        >
          Get Details
        </button>
      </div>
    </div>
  );
};

export default States;
