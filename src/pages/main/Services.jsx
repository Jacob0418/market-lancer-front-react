import React, { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdWeb, MdDesignServices, MdOutlineSupport } from "react-icons/md";
import { useLocation, Navigate } from 'react-router-dom';


const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [error, setError] = useState("");
  const location = useLocation();
  const id = location.state?.id; 
  console.log(id);

  // No lo eliminen; Redirige al Home si no hay ID
  if (!id) {
      return <Navigate to="/" />;
  }

  const images = [
    "images.unsplash.com/photo-1531403009284-440f080d1e12",
    "images.unsplash.com/photo-1542744173-8e7e53415bb0",
    "images.unsplash.com/photo-1519389950473-47ba0277781c"
  ];

  const reviews = [
    { id: 1, name: "John Doe", rating: 5, comment: "Excellent service! Highly recommended." },
    { id: 2, name: "Jane Smith", rating: 4, comment: "Great work and professional approach." }
  ];

  const skills = ["Web Development", "UI/UX Design", "Mobile Apps", "Cloud Services", "API Integration"];

  const plans = [
    {
      name: "Basic",
      price: "$99",
      features: ["5 Pages", "Basic SEO", "Mobile Responsive", "24/7 Support"]
    },
    {
      name: "Professional",
      price: "$199",
      features: ["10 Pages", "Advanced SEO", "Mobile Responsive", "24/7 Priority Support", "Custom Features"]
    },
    {
      name: "Enterprise",
      price: "$399",
      features: ["Unlimited Pages", "Premium SEO", "Mobile Responsive", "24/7 VIP Support", "Custom Features", "API Integration"]
    }
  ];

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
    setError("");
  };

  const handlePurchase = (plan) => {
    if (!selectedPlan) {
      setError("Please select a plan before proceeding.");
      return;
    }
    // Handle purchase logic here
    console.log(`Purchasing ${plan.name} plan`);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Title and Description */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Professional Web Development Services</h1>
        <p className="text-lg text-gray-600">Transform your digital presence with our expert web development solutions</p>
      </div>

      {/* Image Carousel */}
      <div className="relative w-full h-[400px] mb-12 overflow-hidden rounded-lg shadow-xl">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-transform duration-500 ${index === currentSlide ? "translate-x-0" : "translate-x-full"}`}
          >
            <img
              src={`https://${img}`}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1531403009284-440f080d1e12";
              }}
            />
          </div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
          aria-label="Previous slide"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
          aria-label="Next slide"
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      {/* Skills and Description */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Our Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
          <p className="text-gray-600">
            With over 10 years of experience in web development, we specialize in creating
            modern, responsive, and user-friendly websites that drive results for our clients.
          </p>
        </div>
      </div>

      {/* Service Plans */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Choose Your Plan</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-lg transition-transform hover:-translate-y-1 ${selectedPlan === plan ? "ring-2 ring-blue-500" : ""}`}
            >
              <h3 className="text-2xl font-bold text-center mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold text-center text-blue-600 mb-6">{plan.price}</p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handlePurchase(plan)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>

      {/* Reviews */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Client Reviews</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="border p-4 rounded-lg">
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={index < review.rating ? "text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-2">{review.comment}</p>
              <p className="font-semibold">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;