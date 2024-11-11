import React, { useEffect } from "react";
import { FaCamera, FaImages, FaPhotoVideo, FaPalette } from "react-icons/fa";

import ServiceCategory from "../../../components/Home/ServiceCategory";

const Photography = () => {
  useEffect(() => {
    // Desplaza la vista hacia arriba al cargar el componente porque iniciaba desde abajo
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { name: "All", icon: <FaCamera /> },
    { name: "Portrait Photography", icon: <FaImages /> },
    { name: "Event Photography", icon: <FaPhotoVideo /> },
    { name: "Photo Editing", icon: <FaPalette /> },
    { name: "Product Photography", icon: <FaCamera /> },
  ];

  const services = [
    {
      id: 1,
      title: "Professional Portrait Photography",
      category: "Portrait Photography",
      image: "images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      rating: 4.9,
      price: 150,
      seller: "PortraitPros",
      description:
        "Capture stunning portraits with expert lighting and editing.",
    },
    {
        id: 2,
        title: "Wedding & Event Photography",
        category: "Event Photography",
        image: "images.unsplash.com/photo-1505245208761-ba872912fac0",
        rating: 4.8,
        price: 1200,
        seller: "Eventful Moments",
        description: "Professional photography for weddings and events.",
      },
      {
        id: 3,
        title: "Advanced Photo Editing Services",
        category: "Photo Editing",
        image: "images.unsplash.com/photo-1506794778202-cad84cf45f1d",
        rating: 4.7,
        price: 100,
        seller: "PhotoFix",
        description: "Enhance and edit your photos to perfection.",
      },
    {
      id: 4,
      title: "Aerial Drone Photography",
      category: "Aerial Photography",
      image: "images.unsplash.com/photo-1568605114967-8130f3a36994",
      rating: 4.8,
      price: 500,
      seller: "SkyView Drones",
      description:
        "Aerial photography and videography for landscapes and events.",
    },
    {
      id: 5,
      title: "Photo Editing & Retouching",
      category: "Editing & Retouching",
      image: "images.unsplash.com/photo-1521747116042-5a810fda9664",
      rating: 4.9,
      price: 100,
      seller: "EditMaster",
      description:
        "Professional retouching to bring your photos to the next level.",
    },
  ];

  return (
    <ServiceCategory
      title="Photography"
      description="Discover top-rated development services tailored to your needs"
      categories={categories}
      services={services}
    />
  );
};

export default Photography;
