import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

export default function Chart(props) {
  let protein = parseFloat(props.foodInfo[3]) * 4;
  let fat = parseFloat(props.foodInfo[4]) * 9;
  let carbohydrate = parseFloat(props.foodInfo[2]) * 4;

  let data = [
    { nutrient: "Protein", kcal: protein },
    { nutrient: "Fat", kcal: fat },
    { nutrient: "Carbonydrate", kcal: carbohydrate },
  ];

  console.log(props.foodInfo);

  let totalKcal = protein + fat + carbohydrate;

  totalKcal = totalKcal.toFixed(0);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    // <ResponsiveContainer width="100%" height="100%">
    <>
      <h3 style={{ textAlign: "left" }}>{props.foodInfo[0]}</h3>
      <h5 style={{ textAlign: "left" }}>
        1회 섭취량 당 칼로리 {totalKcal} kcal
      </h5>
      <PieChart width={500} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={(data) => {
            return `${data.nutrient} ${String(data.kcal)}`;
          }}
          outerRadius={80}
          fill="#8884d8"
          dataKey="kcal"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      {/* </ResponsiveContainer> */}
    </>
  );
}
