import React, { useState } from "react";
import {
  FaChartBar,
  FaClock,
  FaCheck,
  FaBell,
  FaUser,
  FaSearch,
  FaEllipsisV,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const MainSection = () => {
  const [showError, setShowError] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projectStats = {
    completed: 48,
    pending: 1,
    requested: 8,
  };

  const chartData = [
    { name: "Jan", completed: 4, pending: 2, requested: 1 },
    { name: "Feb", completed: 6, pending: 3, requested: 2 },
    { name: "Mar", completed: 8, pending: 2, requested: 1 },
    { name: "Apr", completed: 10, pending: 1, requested: 2 },
    { name: "May", completed: 12, pending: 2, requested: 1 },
    { name: "Jun", completed: 8, pending: 2, requested: 1 },
  ];

  const recentProjects = [
    {
      id: 1,
      title: "E-commerce Website Redesign",
      client: "Tech Solutions Inc.",
      status: "completed",
      deadline: "2024-02-15",
    },
    {
      id: 2,
      title: "Mobile App Development",
      client: "StartUp Ventures",
      status: "pending",
      deadline: "2024-03-01",
    },
    {
      id: 3,
      title: "Brand Identity Design",
      client: "Creative Agency",
      status: "requested",
      deadline: "2024-03-15",
    },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
            <FaUser className="text-white text-xl" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Freelancer Dashboard
            </h1>
            <p className="text-gray-600">Welcome back, Canchesky</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Search projects"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            <FaEllipsisV className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div
          className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
          role="region"
          aria-label="Completed Projects"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 mb-1">Completed Projects</p>
              <h2 className="text-3xl font-bold text-green-600">
                {projectStats.completed}
              </h2>
            </div>
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <FaCheck className="text-green-600 text-xl" />
            </div>
          </div>
        </div>

        <div
          className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
          role="region"
          aria-label="Pending Projects"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 mb-1">Pending Projects</p>
              <h2 className="text-3xl font-bold text-yellow-600">
                {projectStats.pending}
              </h2>
            </div>
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
              <FaClock className="text-yellow-600 text-xl" />
            </div>
          </div>
        </div>

        <div
          className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
          role="region"
          aria-label="Requested Projects"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 mb-1">Requested Projects</p>
              <h2 className="text-3xl font-bold text-blue-600">
                {projectStats.requested}
              </h2>
            </div>
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <FaBell className="text-blue-600 text-xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="p-6 rounded-xl bg-white shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Project Statistics
            </h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="completed" fill="#059669" />
                  <Bar dataKey="pending" fill="#D97706" />
                  <Bar dataKey="requested" fill="#2563EB" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="p-6 rounded-xl bg-white shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Recent Projects
            </h3>
            <div className="space-y-4">
              {recentProjects.map((project) => (
                <div
                  key={project.id}
                  className="p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-800">
                      {project.title}
                    </h4>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        {
                          completed: "bg-green-100 text-green-800",
                          pending: "bg-yellow-100 text-yellow-800",
                          requested: "bg-blue-100 text-blue-800",
                        }[project.status]
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{project.client}</p>
                  <p className="text-sm text-gray-500">
                    Deadline: {project.deadline}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showError && (
        <div
          role="alert"
          className="fixed bottom-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-lg flex items-center justify-between"
        >
          <span>An error occurred while loading data.</span>
          <button
            onClick={() => setShowError(false)}
            className="ml-4 text-red-700 hover:text-red-800"
            aria-label="Close error message"
          >
            <IoMdClose />
          </button>
        </div>
      )}

      {isMenuOpen && (
        <div className="fixed top-20 right-4 bg-white rounded-lg shadow-lg py-2 w-48">
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors">
            Profile Settings
          </button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors">
            Notifications
          </button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors">
            Help Center
          </button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors text-red-600">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default MainSection;
