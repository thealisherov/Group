import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

// Chart.js modullarini ro'yxatdan o'tkazish
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function LineChart() {
  const data = {
    labels: ["Yan", "Fev", "Mar", "Apr", "May", "Iyun","iYUL","Avgust","Sentyabr"],
    datasets: [
      {
        label: "Oylik Foyda",
        data: [10, 25, 15, 40, 35, 50,16,97,33],
        borderColor: "blue",
        backgroundColor: "lightblue",
        tension: 0.4, // chiziq yumaloqligi
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
  };

  return <Line data={data} options={options} />;
}
