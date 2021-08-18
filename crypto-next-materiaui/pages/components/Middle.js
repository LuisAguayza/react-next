import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["Sep 19", "Sep 20", "Sep 21", "Sep 22", "Sep 23", "Sep24", "Sep 25"],
  datasets: [
    {
      label: "Bitcoin",
      backgroundColor: "rgba(67, 56, 202)",
      borderColor: "rgba(67, 56, 202)",
      data: [12, 10, 6, 6, 6, 7, 7, 8],
    },
  ],
};

const Middle = () => {
  return (
    <div className=" bg-white ml-2   shadow-sm w-8/12 border rounded-xl border-gray-100">
      <div className="border-b p-3 border-gray-100">
        <p className="font-semibold  ">Moneda</p>
      </div>
      <div>
        <Line data={data} />
      </div>
    </div>
  );
};

export default Middle;
