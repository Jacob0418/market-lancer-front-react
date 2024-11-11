import React, { useState, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaCode,
  FaMobile,
  FaDatabase,
  FaCloud,
  FaDesktop,
  FaGlobe,
} from "react-icons/fa";

const Development = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [carouselIndex, setCarouselIndex] = useState(0);

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
  ];

  const [filteredServices, setFilteredServices] = useState(services);
  const [filters, setFilters] = useState({
    budget: "all",
    delivery: "all",
    rating: "all",
  });

  useEffect(() => {
    let filtered = services;
    if (activeCategory !== "All") {
      filtered = filtered.filter(
        (service) => service.category === activeCategory
      );
    }
    setFilteredServices(filtered);
  }, [activeCategory]);

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev === categories.length - 3 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev === 0 ? categories.length - 3 : prev - 1));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4" role="heading">
        Development
      </h1>
      <p className="text-gray-600 mb-8">
        Discover top-rated development services tailored to your needs
      </p>

      {/* Categories Carousel */}
      <div className="relative mb-8">
        <div className="flex items-center">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 mr-4"
            aria-label="Previous categories"
          >
            <FaChevronLeft />
          </button>
          <div className="overflow-hidden flex-1">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${carouselIndex * 33.33}%)` }}
            >
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category.name)}
                  className={`flex items-center justify-center px-6 py-3 rounded-full mr-4 transition-all ${
                    activeCategory === category.name
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                  aria-pressed={activeCategory === category.name}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 ml-4"
            aria-label="Next categories"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <select
          className="p-2 border rounded-lg"
          onChange={(e) => setFilters({ ...filters, budget: e.target.value })}
          aria-label="Select budget range"
        >
          <option value="all">All Budgets</option>
          <option value="low">Under $500</option>
          <option value="medium">$500 - $1000</option>
          <option value="high">Above $1000</option>
        </select>
        <select
          className="p-2 border rounded-lg"
          onChange={(e) => setFilters({ ...filters, delivery: e.target.value })}
          aria-label="Select delivery time"
        >
          <option value="all">Delivery Time</option>
          <option value="fast">Express 24h</option>
          <option value="standard">2-3 days</option>
          <option value="relaxed">4+ days</option>
        </select>
        <select
          className="p-2 border rounded-lg"
          onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
          aria-label="Select minimum rating"
        >
          <option value="all">All Ratings</option>
          <option value="4.5">4.5+</option>
          <option value="4.0">4.0+</option>
          <option value="3.5">3.5+</option>
        </select>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105"
          >
            <img
              src={`https://${service.image}`}
              alt={service.title}
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97";
              }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < Math.floor(service.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">{service.rating}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-blue-600">
                  Starting at ${service.price}
                </span>
                <span className="text-sm text-gray-500">{service.seller}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Development;
