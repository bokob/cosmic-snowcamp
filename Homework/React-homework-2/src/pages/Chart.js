import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

export default class Chart extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj";

  render() {
    let data = [
      { nutrient: "Protein", kcal: 400 },
      { nutrient: "Fat", kcal: 300 },
      { nutrient: "Carbonydrate", kcal: 300 },
    ];

    let totalKcal =
      (data[0].kcal * 4 + data[1].kcal * 9 + data[2].kcal * 4) / 3;

    totalKcal = totalKcal.toFixed(0);

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

    return (
      // <ResponsiveContainer width="100%" height="100%">
      <>
        <h3 style={{ textAlign: "left" }}>식품이름</h3>
        <h5 style={{ textAlign: "left" }}>
          1회 섭취량 당 칼로리 {totalKcal} kcal
        </h5>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={true}
            label={(data) => {
              return `${data.nutrient} ${String(data.kcal)}`;
            }}
            outerRadius={80}
            fill="#8884d8"
            dataKey="kcal"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        {/* </ResponsiveContainer> */}
      </>
    );
  }
}
