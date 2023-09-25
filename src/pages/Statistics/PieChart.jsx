import React, { useState } from "react";
import { PieChart, Pie } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieChartComponent = () => {
  const [selectedSlice, setSelectedSlice] = useState(null);

  const handleSliceClick = (slice) => {
    setSelectedSlice(slice);
  };

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={({ x, y, percent, name }) => (
          <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > 200 ? "start" : "end"}
            dominantBaseline="central"
          >
            {`${percent.toFixed(0)}% ${name}`}
          </text>
        )}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        onMouseEnter={handleSliceClick}
        onMouseLeave={() => setSelectedSlice(null)}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default PieChartComponent;
