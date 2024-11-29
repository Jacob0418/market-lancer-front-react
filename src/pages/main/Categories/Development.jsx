import React, { useEffect } from "react";
import {
  FaCode,
  FaMobile,
  FaDatabase,
  FaCloud,
  FaDesktop,
  FaGlobe,
} from "react-icons/fa";
import ServiceCategory from "../../../components/Home/ServiceCategory";
import SendBirdChat from "../../../components/Chat/SendBirdChat";
import Chat2 from "../../../components/Chat/SendBirdChat2";
import Chat from "../../../components/Chat/Chat";

const Development = () => {
  useEffect(() => {
    // Desplaza la vista hacia arriba al cargar el componente porque iniciaba desde abajo
    window.scrollTo(0, 0);
  }, []);
  const categories = [
    { name: "All", icon: <FaCode /> },
    { name: "Web Development", icon: <FaGlobe /> },
    { name: "Mobile Apps", icon: <FaMobile /> },
    { name: "Database", icon: <FaDatabase /> },
    { name: "Cloud Services", icon: <FaCloud /> },
    { name: "Desktop Apps", icon: <FaDesktop /> },
  ];

  const services = [
    {
      id: 1,
      title: "Full Stack Web Development",
      category: "Web Development",
      image: "images.unsplash.com/photo-1633356122544-f134324a6cee",
      rating: 4.8,
      price: 499,
      seller: "TechPro Solutions",
      description:
        "Complete web development services using modern technologies",
    },
    {
      id: 2,
      title: "Mobile App Development",
      category: "Mobile Apps",
      image: "images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      rating: 4.9,
      price: 799,
      seller: "AppMasters",
      description: "Native and cross-platform mobile application development",
    },
    {
      id: 3,
      title: "Cloud Architecture",
      category: "Cloud Services",
      image: "images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
      rating: 4.7,
      price: 899,
      seller: "CloudTech Pro",
      description: "Enterprise cloud solutions and architecture design",
    },
    {
      id: 4,
      title: "Cloud Database",
      category: "Database",
      image: "images.unsplash.com/photo-1461749280684-dccba630e2f6",
      rating: 4.7,
      price: 599,
      seller: "Canchesky Pro",
      description: "Enterprise cloud solutions and Database design",
    },
  ];

  return (
    <>
      <ServiceCategory
        title="Development"
        description="Discover top-rated development services tailored to your needs"
        categories={categories}
        services={services}
      />
      <Chat/>
    </>
  );
};

export default Development;
