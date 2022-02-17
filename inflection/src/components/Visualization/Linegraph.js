import React, { Component, useState, useEffect } from "react";

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
import Typography from "@mui/material/Typography";

function Linegraph({
  graphData,
  emotion1,
  emotion2,
  emotion3,
  emotion4,
  toggle1,
  toggle2,
  toggle3,
  toggle4,
}) {
  console.log(Boolean(graphData), emotion1, emotion2, emotion3, emotion4);
  const deconEmo1 = [{}];
  const deconEmo2 = [{}];
  const deconEmo3 = [{}];
  const deconEmo4 = [{}];

  const [emo1, setEmo1] = useState([]);
  const [emo2, setEmo2] = useState([]);
  const [emo3, setEmo3] = useState([]);
  const [emo4, setEmo4] = useState([]);

  // const [graphRefresh, onGraphRefresh] = useState(0);
  const mountDisplayEntries = () => {
    if (graphData) {
      for (let entryindex = 0; entryindex < graphData.length; entryindex++) {
        deconEmo1[entryindex]["entry_id"] = graphData[entryindex]["entry_id"];
        deconEmo1[entryindex]["time"] = graphData[entryindex][
          "created_at"
        ].substr(0, 10);
        deconEmo1[entryindex]["created_at"] =
          graphData[entryindex]["created_at"];
        if (emotion1) {
          if (graphData[entryindex][emotion1] > 0) {
            deconEmo1[entryindex][emotion1] = graphData[entryindex][emotion1];
          }
        }
        if (emotion2) {
          if (graphData[entryindex][emotion2] > 0) {
            deconEmo1[entryindex][emotion2] = graphData[entryindex][emotion2];
          }
        }
        if (emotion3) {
          if (graphData[entryindex][emotion3] > 0) {
            deconEmo1[entryindex][emotion3] = graphData[entryindex][emotion3];
          }
        }
        if (emotion4) {
          if (graphData[entryindex][emotion4] > 0) {
            deconEmo1[entryindex][emotion4] = graphData[entryindex][emotion4];
          }
        }

        deconEmo1.push({});
      }
      // onGraphRefresh(graphRefresh + 1);
      deconEmo1.pop();
      setEmo1(deconEmo1);
    }
    LinesOutput();
  };
  useEffect(() => {
    // console.log("a");;

    mountDisplayEntries();
  }, [
    graphData,
    emotion1,
    emotion2,
    emotion3,
    emotion4,
    toggle1,
    toggle2,
    toggle3,
    toggle4,
  ]);

  // const datafake = [
  //   { time: "03:00", value: "300" },
  //   { time: "06:00", value: "200" },
  //   { time: "09:00", value: "90" },
  //   { time: "012:00", value: "100" },
  //   { time: "015:00", value: "800" },
  //   { time: "018:00", value: "200" },
  //   { time: "021:00", value: "300" },
  // ];

  // each deconEmo will be [{entryid:val, date:val, emotion:val}, {entryid:val, date:val, emotion:val}]

  //   entryid: graphData[entryindex]["entry_id"],
  //   date: graphData[entryindex]["created_at"],
  //   emotion1: graphData[entryindex][emotion1],
  // });

  //  <text
  //         key={displayEntries[entryindex]["entry_id"]}
  //         setCurrentPage={setCurrentPage}
  //         entries={displayEntries[entryindex]}
  //         UpdatedJournalReview={UpdatedJournalReview}
  //       />
  console.log("emo1", emo1);

  const LinesOutput = () => {
    const lineOutput = [];
    if (toggle1 == true) {
      lineOutput.push(
        <Line
          key="line1"
          strokeWidth={2}
          connectNulls
          type="monotone"
          dataKey={emotion1}
          stroke="red"
          inactiveDot={{ r: 0 }}
          activeDot={{ r: 0 }}
        />
      );
    }
    if (toggle2) {
      lineOutput.push(
        <Line
          key="line2"
          strokeWidth={2}
          connectNulls
          type="monotone"
          dataKey={emotion2}
          stroke="#448899"
          inactiveDot={{ r: 0 }}
          activeDot={{ r: 0 }}
        />
      );
    }
    if (toggle3) {
      lineOutput.push(
        <Line
          key="line3"
          strokeWidth={2}
          connectNulls
          type="monotone"
          dataKey={emotion3}
          stroke="#8884d8"
          inactiveDot={{ r: 0 }}
          activeDot={{ r: 0 }}
        />
      );
    }
    if (toggle4) {
      lineOutput.push(
        <Line
          key="line4"
          strokeWidth={2}
          connectNulls
          type="monotone"
          dataKey={emotion4}
          stroke="pink"
          inactiveDot={{ r: 0 }}
          activeDot={{ r: 0 }}
        />
      );
    }
    return lineOutput;
  };
  console.log("lines", LinesOutput());

  return (
    <div>
      <ResponsiveContainer width="90%" aspect={3.0}>
        <LineChart
          data={emo1}
          margin={{
            top: 16,
            right: 16,
            bottom: 36,
            left: 24,
          }}
        >
          <CartesianGrid />
          <XAxis
            style={{
              fontSize: ".8rem",
              fontFamily: "Montserrat",
            }}
            dataKey="time"
            angle={15}
            interval={Math.floor(emo1.length / 5)}
            padding={{ left: 0, right: 0 }}
          >
            <Label
              style={{
                fontSize: ".8rem",
                fontFamily: "Montserrat",
              }}
              angle={0}
              position="middle"
            ></Label>
          </XAxis>

          <YAxis
            style={{
              fontSize: ".8rem",
              fontFamily: "Montserrat",
            }}
            dataKey={emotion1}
            domain={[0, 10]}
          >
            <Label
              fontFamily="Montserrat"
              angle={270}
              position="left"
              style={{ textAnchor: "middle" }}
            >
              Intensity
            </Label>
          </YAxis>
          {/* <YAxis dataKey={emotion2} domain={[0, 10]}>
            <Label
              fontFamily="Montserrat"
              angle={270}
              position="left"
              style={{ textAnchor: "middle" }}
            >
              {emotion2}
            </Label>
          </YAxis> */}

          <Tooltip />
          {/* {LinesOutput()} */}
          {LinesOutput()}
          {/* 
          <Line
            strokeWidth={2}
            connectNulls
            type="monotone"
            dataKey={emotion1}
            stroke="red"
            inactiveDot={{ r: 0 }}
            activeDot={{ r: 0 }}
          />
          <Line
            strokeWidth={2}
            connectNulls
            type="monotone"
            dataKey={emotion2}
            stroke="#448899"
            activeDot={{ r: 0 }}
            inactiveDot={{ r: 0 }}
          />
          <Line
            strokeWidth={2}
            connectNulls
            type="monotone"
            dataKey={emotion3}
            stroke="#8884d8"
            activeDot={{ r: 0 }}
            inactiveDot={{ r: 0 }}
          />
          <Line
            strokeWidth={2}
            connectNulls
            type="monotone"
            dataKey={emotion4}
            stroke="pink"
            activeDot={{ r: 0 }}
            inactiveDot={{ r: 0 }}
          /> */}
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
export default Linegraph;
