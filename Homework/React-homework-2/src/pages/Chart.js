import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

export default class Example extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj";

  render() {
    let data = [
      { name: "Protein", value: 400 },
      { name: "Fat", value: 300 },
      { name: "Carbonydrate", value: 300 },
    ];

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

    return (
      // <ResponsiveContainer width="100%" height="100%">
      <>
        <header>식품이름</header>
        <PieChart width={500} height={500}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={true}
            label={(data) => {
              return `${data.name} ${String(data.value)}`;
            }}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
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
