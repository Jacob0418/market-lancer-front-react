import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ServiceCategory = ({ title, description, categories, services }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [filteredServices, setFilteredServices] = useState(services);
  const navigate = useNavigate();

  useEffect(() => {
    let filtered = services;
    if (activeCategory !== "All") {
      filtered = services.filter(
        (service) => service.category === activeCategory
      );
    }
    setFilteredServices(filtered);
  }, [activeCategory, services]);

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev === categories.length - 3 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev === 0 ? categories.length - 3 : prev - 1));
  };

  const handleCardClick = (id, context) => {
    navigate(`/services/${context}`, { state: { id } });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600 mb-8">{description}</p>

      {/* Categories Carousel */}
      <div className="relative mb-8">
        <div className="flex items-center">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 mr-4"
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
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            onClick={() => handleCardClick(service.id, service.title)}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105"
          >
            <img
              src={`https://${service.image}`}
              alt={service.title}
              className="w-full h-48 object-cover"
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

export default ServiceCategory;
