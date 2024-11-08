import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss";
import NumberTicker from "../../../components/number-ticker";

const data = [{ name: "Credit Score", value: 720, color: "#047857" }];

const PieChartBox = () => {
  return (
    <div className="pieChartBox py-2 ">
      <h1 className="text-center text-2xl text-emerald-700">
        Credit Score : <span />
        <NumberTicker value={720} />
      </h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />

            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChartBox;
