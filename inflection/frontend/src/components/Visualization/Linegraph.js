import React, { Component } from "react";

// import "./linegraph.css";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Label,
} from "recharts";
import { container } from "webpack";

function Linegraph({ data }) {
  const datafake = [
    { time: "03:00", value: "300" },
    { time: "06:00", value: "200" },
    { time: "09:00", value: "90" },
    { time: "012:00", value: "100" },
    { time: "015:00", value: "800" },
    { time: "018:00", value: "200" },
    { time: "021:00", value: "300" },
  ];
  // const Container = (
  //   <div>
  //     <ResponsiveContainer width="85%" aspect={3}></ResponsiveContainer>
  //   </div>
  // );

  return (
    <div>
      {/* <p>{container}</p> */}
      <p>Linegraph component</p>
      <p>
        <LineChart data={datafake} margin={{ left: 250 }}>
          <CartesianGrid />
          <XAxis dataKey="time" interval={"preserveEnd"} />
          <YAxis></YAxis>
          <Legend />
          <Tooltip />
          <Line dataKey="value" stroke="red" activeDot={{ r: 8 }} />
        </LineChart>
      </p>
    </div>
  );
}
export default Linegraph;
