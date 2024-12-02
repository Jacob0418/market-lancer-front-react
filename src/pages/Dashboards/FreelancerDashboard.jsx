import React, { useState } from "react";
import {
  FiHome,
  FiBriefcase,
  FiDollarSign,
  FiUser,
  FiHelpCircle,
  FiMenu,
  FiX,
  FiBell,
  FiSearch,
} from "react-icons/fi";
import { BsArrowLeftShort } from "react-icons/bs";
import ProfileSection from "../../components/Dashboard/ProfileSection";
import SupportSection from "../../components/Dashboard/SupportSection";
import ServicesSection from "../../components/Dashboard/ServiceSection";
import EarningsDashboard from "../../components/Dashboard/EarlingSection";
import MainSection from "../../components/Dashboard/MainSection";

const FreelancerDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New project invitation received" },
    { id: 2, message: "Payment received for Project X" },
    { id: 3, message: "Client message: Project update required" },
  ]);

  const projects = [
    {
      id: 1,
      title: "E-commerce Website Development",
      client: "Tech Solutions Inc.",
      status: "In Progress",
      deadline: "2024-02-28",
    },
    {
      id: 2,
      title: "Mobile App UI Design",
      client: "Creative Studios",
      status: "Pending",
      deadline: "2024-03-15",
    },
  ];

  const jobListings = [
    {
      id: 1,
      title: "Senior React Developer",
      budget: "$5000-$8000",
      duration: "3 months",
      skills: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "UI/UX Designer",
      budget: "$3000-$5000",
      duration: "2 months",
      skills: ["Figma", "Adobe XD", "UI Design"],
    },
  ];

  const earnings = {
    totalEarned: 25000,
    pendingPayments: 3500,
    thisMonth: 4500,
    transactions: [
      {
        id: 1,
        amount: 2500,
        project: "Website Development",
        date: "2024-01-15",
      },
      { id: 2, amount: 1800, project: "Logo Design", date: "2024-01-10" },
    ],
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${isSidebarOpen ? "w-64" : "w-20"} 
        bg-gradient-to-b from-blue-600 to-blue-800 p-5 pt-8 duration-300 relative h-screen`}
      >
        <BsArrowLeftShort
          className={`bg-white text-blue-800 text-3xl rounded-full absolute -right-3 top-9 border border-blue-800 cursor-pointer ${
            !isSidebarOpen && "rotate-180"
          }`}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        <div className="flex gap-x-4 items-center">
          <img
            src="images.unsplash.com/photo-1633332755192-727a05c4013d"
            className={`cursor-pointer duration-500 rounded-full h-10 w-10 ${
              !isSidebarOpen && "scale-0"
            }`}
            alt="profile"
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-300 ${
              !isSidebarOpen && "scale-0"
            }`}
          >
            Freelancer Hub
          </h1>
        </div>

        <ul className="pt-6">
          {[
            { title: "Dashboard", icon: <FiHome />, section: "dashboard" },
            { title: "Services", icon: <FiBriefcase />, section: "projects" },
            { title: "Earnings", icon: <FiDollarSign />, section: "earnings" },
            { title: "Profile", icon: <FiUser />, section: "profile" },
            { title: "Support", icon: <FiHelpCircle />, section: "support" },
          ].map((menu) => (
            <li
              key={menu.title}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-blue-500 text-white text-sm items-center gap-x-4 mt-2
              ${menu.section === activeSection && "bg-blue-500"}`}
              onClick={() => setActiveSection(menu.section)}
            >
              <span className="text-xl">{menu.icon}</span>
              <span
                className={`${
                  !isSidebarOpen && "hidden"
                } origin-left duration-200`}
              >
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white p-4 shadow-md flex justify-between items-center">
          <div className="flex items-center gap-4">
            <FiMenu className="text-2xl cursor-pointer" />
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <FiBell className="text-2xl cursor-pointer" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                {notifications.length}
              </span>
            </div>
            <img
              src="images.unsplash.com/photo-1633332755192-727a05c4013d"
              className="w-8 h-8 rounded-full"
              alt="profile"
            />
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6">
          {activeSection === "dashboard" && <MainSection></MainSection>}
          {activeSection === "projects" && <ServicesSection></ServicesSection>}
          {activeSection === "earnings" && <EarningsDashboard />}
          {activeSection === "profile" && <ProfileSection></ProfileSection>}
          {activeSection === "support" && <SupportSection></SupportSection>}
        </div>
      </div>
    </div>
  );
};

export default FreelancerDashboard;
