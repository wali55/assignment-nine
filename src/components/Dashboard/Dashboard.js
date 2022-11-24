import React from 'react';
import { Area, AreaChart, Bar, BarChart, Legend, Line, LineChart, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
      id: 1,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
      id: 2,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
      id: 3,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
      id: 4,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
      id: 5,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
      id: 6,
    },
  ];
  return (
    <div>
      <h1 className="text-4xl text-center my-14">
        Build <span className="text-orange-400">Charts</span> with React
        Component
      </h1>
      <div>
        <div>
          <LineChart width={400} height={400} data={data}>
            <Line type="monotone" dataKey="sell"  stroke="#8884d8"></Line>
            <XAxis dataKey="month"></XAxis>
            <YAxis dataKey="sell"></YAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
          </LineChart>
        </div>
        <div>
            <AreaChart width={400} height={400} data={data}>
                <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8">
                </Area>
                <XAxis dataKey="month"></XAxis>
                <YAxis dataKey="investment"></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
            </AreaChart>
        </div>
        <div>
            <BarChart width={400} height={400} data={data}>
                <Bar dataKey="revenue" fill="#8884d8"></Bar>
                <XAxis dataKey="month"></XAxis>
                <YAxis dataKey="revenue"></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
            </BarChart>
        </div>
        <div>
            <ScatterChart width={400} height={400}>
                <Scatter data={data} fill="#8884d8"></Scatter>
                <XAxis dataKey="month"></XAxis>
                <YAxis dataKey="sell"></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
            </ScatterChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
