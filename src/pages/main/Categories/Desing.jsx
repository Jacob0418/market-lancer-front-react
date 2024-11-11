import React, { useEffect } from "react";
import {
  FaPaintBrush,
  FaPen,
  FaCogs,
  FaLaptop,
  FaPhotoVideo,
  FaFileImage,
} from "react-icons/fa";

import ServiceCategory from "../../../components/Home/ServiceCategory";

const Design = () => {
  useEffect(() => {
    // Desplaza la vista hacia arriba al cargar el componente porque iniciaba desde abajo
    window.scrollTo(0, 0);
  }, []);
  const categories = [
    { name: "All", icon: <FaCogs /> },
    { name: "Graphic Design", icon: <FaPaintBrush /> },
    { name: "UI/UX Design", icon: <FaPen /> },
    { name: "Web Design", icon: <FaLaptop /> },
    { name: "Photography", icon: <FaPhotoVideo /> },
    { name: "Logo Design", icon: <FaFileImage /> },
  ];

  const services = [
    {
      id: 1,
      title: "Custom Logo Design",
      category: "Logo Design",
      image: "images.pexels.com/photos/1181344/pexels-photo-1181344.jpeg",
      rating: 4.9,
      price: 299,
      seller: "Design Masters",
      description: "Get a unique and professional logo for your brand",
    },
    {
      id: 2,
      title: "UI-UX Design for Mobile Apps",
      category: "UI/UX Design",
      image: "images.unsplash.com/photo-1556740749-887f6717d7e4",
      rating: 4.8,
      price: 499,
      seller: "UXperts",
      description:
        "User interface and experience design for mobile applications",
    },
    {
      id: 3,
      title: "Website Design",
      category: "Web Design",
      image: "images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4.7,
      price: 799,
      seller: "WebCreations",
      description:
        "Design a beautiful and responsive website for your business",
    },
    {
      id: 4,
      title: "Product Photography",
      category: "Photography",
      image: "images.pexels.com/photos/1761277/pexels-photo-1761277.jpeg",
      rating: 4.7,
      price: 350,
      seller: "PhotoPro Studio",
      description: "Professional product photography for e-commerce stores",
    },
    {
      id: 5,
      title: "Social Media Graphics",
      category: "Graphic Design",
      image: "images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4.9,
      price: 199,
      seller: "Creative Designs",
      description: "Eye-catching graphics for your social media profiles",
    },
    {
      id: 6,
      title: "Corporate Branding",
      category: "Graphic Design",
      image: "images.pexels.com/photos/2079837/pexels-photo-2079837.jpeg",
      rating: 4.8,
      price: 600,
      seller: "BrandXperts",
      description:
        "Design complete branding for your company, including logos, colors, and fonts",
    },
  ];

  return (
    <ServiceCategory
      title="Desing"
      description="Discover top-rated development services tailored to your needs"
      categories={categories}
      services={services}
    />
  );
};

export default Design;
