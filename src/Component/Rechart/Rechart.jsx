import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Text,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red"];

const booksData = [
  { title: "The Great Gatsby", pages: 192, color: colors[0] },
  { title: "To Kill a Mockingbird", pages: 281, color: colors[1] },
  { title: "1984", pages: 328, color: colors[2] },
  { title: "The Alchemist", pages: 177, color: colors[3] },
  { title: "Pride and Prejudice", pages: 279, color: colors[4] },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height} 
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
    x + width / 2
  }, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
    y + height
  } ${x + width}, ${y + height} 
          Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function BookChart() {
  return (
    <BarChart
      width={800} // Bigger width
      height={500} // Bigger height
      data={booksData}
      margin={{ top: 30, right: 50, left: 50, bottom: 60 }} // More space for labels
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="title" tick={{ fontSize: 14 }} />
      <YAxis />
      <Bar
        dataKey="pages"
        shape={<TriangleBar />}
        label={{ position: "top", content: CustomLabel }}
      >
        {booksData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Bar>
    </BarChart>
  );
}

// Custom Label Component for colored text
const CustomLabel = (props) => {
  const { x, y, value, index } = props;
  return (
    <Text
      x={x + 12}
      y={y - 12}
      fill={colors[index]}
      fontSize={16}
      fontWeight="bold"
    >
      {value}
    </Text>
  );
};
