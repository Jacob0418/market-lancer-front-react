import React from "react";
import {
  FaPencilAlt,
  FaBook,
  FaNewspaper,
  FaPenNib,
  FaFileAlt,
} from "react-icons/fa";

import ServiceCategory from "../../../components/Home/ServiceCategory";

const Writing = () => {
  const categories = [
    { name: "All", icon: <FaPencilAlt /> },
    { name: "Content Writing", icon: <FaFileAlt /> },
    { name: "Copywriting", icon: <FaPenNib /> },
    { name: "Technical Writing", icon: <FaBook /> },
    { name: "Journalism", icon: <FaNewspaper /> },
  ];

  const services = [
    {
      id: 1,
      title: "SEO Content Writing",
      category: "Content Writing",
      image: "images.unsplash.com/photo-1515378791036-0648a3ef77b2",
      rating: 4.9,
      price: 150,
      seller: "WriteIt Solutions",
      description: "Engaging SEO-friendly articles tailored to your audience",
    },
    {
      id: 2,
      title: "Persuasive Copywriting",
      category: "Copywriting",
      image: "images.unsplash.com/photo-1554774853-4b36f62fc3e4",
      rating: 4.8,
      price: 200,
      seller: "CopyPro",
      description: "High-conversion copywriting for ads, emails, and websites",
    },
    {
      id: 3,
      title: "Technical Documentation",
      category: "Technical Writing",
      image: "images.unsplash.com/photo-1521791136064-7986c2920216",
      rating: 4.7,
      price: 300,
      seller: "TechDocs Inc.",
      description: "Comprehensive technical documentation and user manuals",
    },
    {
      id: 4,
      title: "Feature Articles",
      category: "Journalism",
      image: "images.unsplash.com/photo-1496498807585-9d16d403f9b5",
      rating: 4.8,
      price: 180,
      seller: "NewsWrite",
      description:
        "In-depth and insightful feature articles on trending topics",
    },
  ];

  return (
    <ServiceCategory
      title="Writing"
      description="Discover top-rated development services tailored to your needs"
      categories={categories}
      services={services}
    />
  );
};

export default Writing;
