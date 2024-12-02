import React, { useState } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FiInfo, FiArrowUp, FiArrowDown } from "react-icons/fi";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const EarningsDashboard = () => {
  const [hoveredRow, setHoveredRow] = useState(null);

  const mockEarningsData = [
    {
      month: "January",
      revenue: 45000,
      expenses: 32000,
      profit: 13000,
      growth: 5.2,
    },
    {
      month: "February",
      revenue: 52000,
      expenses: 35000,
      profit: 17000,
      growth: 8.1,
    },
    {
      month: "March",
      revenue: 48000,
      expenses: 31000,
      profit: 17000,
      growth: -2.3,
    },
    {
      month: "April",
      revenue: 51000,
      expenses: 34000,
      profit: 17000,
      growth: 4.5,
    },
  ];

  const lineChartData = {
    labels: mockEarningsData.map((data) => data.month),
    datasets: [
      {
        label: "Revenue",
        data: mockEarningsData.map((data) => data.revenue),
        borderColor: "rgb(59, 130, 246)",
        tension: 0.4,
      },
      {
        label: "Expenses",
        data: mockEarningsData.map((data) => data.expenses),
        borderColor: "rgb(239, 68, 68)",
        tension: 0.4,
      },
    ],
  };

  const barChartData = {
    labels: mockEarningsData.map((data) => data.month),
    datasets: [
      {
        label: "Profit",
        data: mockEarningsData.map((data) => data.profit),
        backgroundColor: "rgb(34, 197, 94)",
      },
    ],
  };

  const pieChartData = {
    labels: ["Revenue", "Expenses", "Profit"],
    datasets: [
      {
        data: [45000, 32000, 13000],
        backgroundColor: [
          "rgb(59, 130, 246)",
          "rgb(239, 68, 68)",
          "rgb(34, 197, 94)",
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Earnings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Total Revenue</h2>
          <p className="text-3xl font-bold text-blue-600">$196,000</p>
          <div className="flex items-center mt-2 text-sm">
            <FiArrowUp className="text-green-500 mr-1" />
            <span className="text-green-500">8.2% vs last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Total Expenses</h2>
          <p className="text-3xl font-bold text-red-600">$132,000</p>
          <div className="flex items-center mt-2 text-sm">
            <FiArrowDown className="text-red-500 mr-1" />
            <span className="text-red-500">2.1% vs last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Net Profit</h2>
          <p className="text-3xl font-bold text-green-600">$64,000</p>
          <div className="flex items-center mt-2 text-sm">
            <FiArrowUp className="text-green-500 mr-1" />
            <span className="text-green-500">12.3% vs last month</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Revenue vs Expenses</h2>
          <Line data={lineChartData} options={chartOptions} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Monthly Profit</h2>
          <Bar data={barChartData} options={chartOptions} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Earnings Breakdown</h2>
          <div className="overflow-x-auto">
            <table className="w-full" role="table">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Month
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Revenue
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Expenses
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Profit
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Growth
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockEarningsData.map((row, index) => (
                  <tr
                    key={row.month}
                    className={`border-b ${
                      hoveredRow === index ? "bg-blue-50" : ""
                    }`}
                    onMouseEnter={() => setHoveredRow(index)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    <td className="px-6 py-4 text-sm text-gray-800">
                      {row.month}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      ${row.revenue.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      ${row.expenses.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      ${row.profit.toLocaleString()}
                    </td>
                    <td
                      className={`px-6 py-4 text-sm ${
                        row.growth >= 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {row.growth}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Distribution</h2>
          <Pie data={pieChartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default EarningsDashboard;
