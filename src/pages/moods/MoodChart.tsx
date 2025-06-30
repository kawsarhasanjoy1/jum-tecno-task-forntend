import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const MoodChart = ({ data }: any) => {
  return (
    <div className="mt-5">
      <h5 className="text-center">Weekly Mood Summary</h5>
      <Bar
        data={{
          labels: ["Happy", "Sad", "Angry", "Excited"],
          datasets: [
            {
              label: "Mood Count",
              data: [
                data?.moodCounts?.Happy,
                data?.moodCounts?.Sad,
                data?.moodCounts?.Angry,
                data?.moodCounts?.Excited,
              ],
              backgroundColor: ["#0d6efd", "#dc3545", "#ffc107", "#20c997"],
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: "bottom",
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: { stepSize: 1 },
            },
          },
        }}
      />
    </div>
  );
};

export default MoodChart;
