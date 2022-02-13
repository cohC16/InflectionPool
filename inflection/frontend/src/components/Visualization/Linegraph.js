import React, { Component, useState, useEffect } from "react";

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

  return (
    <div>
      <ResponsiveContainer width="80%" aspect={3}>
        <LineChart
          data={datafake}
          margin={{
            top: 16,
            right: 16,
            bottom: 40,
            left: 24,
          }}
        >
          <CartesianGrid />
          <XAxis dataKey="time">
            <Label angle={0} position="bottom" style={{ textAnchor: "top" }}>
              Per time
            </Label>
          </XAxis>
          <YAxis dataKey="value">
            <Label angle={270} position="left" style={{ textAnchor: "middle" }}>
              Emo
            </Label>
          </YAxis>
          <Tooltip />
          <Line dataKey="value" stroke="red" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
export default Linegraph;
