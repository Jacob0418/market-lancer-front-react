import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaStar,
  FaCode,
  FaPencilAlt,
  FaCamera,
  FaLaptop,
  FaPalette,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";
import img4 from "../../assets/img/img4.jpg";
import img5 from "../../assets/img/img5.jpg";
import img6 from "../../assets/img/img6.jpg";
import img7 from "../../assets/img/img7.jpg";
import ApiService from "../../API/GetEndPoints";

const Home = () => {
  const navigate = useNavigate();
  /*const [currentTestimonial, setCurrentTestimonial] = useState(0); */
  const [example, setExample] = useState([]);

  useEffect(() => {
    const fetchExample = async () => {
      try {
        const data = await ApiService.getCategories();
        setExample(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchExample();
  }, []);
  console.log(example);

  const categories = [
    {
      id: 1,
      icon: <FaCode />,
      name: "Development",
      count: "1.2k+ Services",
      nextClick: "/categories/development",
    },
    {
      id: 2,
      icon: <FaPencilAlt />,
      name: "Writing",
      count: "800+ Services",
      nextClick: "/categories/writing",
    },
    {
      id: 3,
      icon: <FaCamera />,
      name: "Photography",
      count: "500+ Services",
      nextClick: "/categories/photography",
    },
    {
      id: 4,
      icon: <FaLaptop />,
      name: "Digital Marketing",
      count: "900+ Services",
      nextClick: "/categories/digital&marketing",
    },
    {
      id: 5,
      icon: <FaPalette />,
      name: "Design",
      count: "1.5k+ Services",
      nextClick: "/categories/design",
    },
  ];

  /* const featuredServices = [
    {
      id: 1,
      title: "Web Development",
      description: "Professional web development services for your business",
      image: "images.unsplash.com/photo-1461749280684-dccba630e2f6",
      price: "$499",
      nextClick: "/categories/development",
    },
    {
      id: 2,
      title: "Logo Design",
      description: "Creative logo design to build your brand identity",
      image: "images.unsplash.com/photo-1519389950473-47ba0277781c",
      price: "$299",
      nextClick: "/categories/design",
    },
    {
      id: 3,
      title: "Content Writing",
      description: "SEO-optimized content for your website and blog",
      image: "images.unsplash.com/photo-1455390582262-044cdead277a",
      price: "$199",
      nextClick: "/categories/writing",
    },
  ]; */
  
  //Featured Services
  const [featuredServices, setFeaturedServices] = useState([]);

  useEffect(() => {
    const fetchFeaturedServices = async () => {
      try {
        const data = await ApiService.getServices();
        const enrichedData = data.result.map((service) => ({
          ...service,
          nextClick: `/categories/${service.name}`, // Genera un nextClick dinámico
        }));
        setFeaturedServices(enrichedData);
      } catch (err) {
        setError(err.message || "Error al obtener servicios destacados");
      } finally {
        setLoading(false);
      }
    };
  
    fetchFeaturedServices();
  }, []);
  console.log(featuredServices);

  const scrollToSection = () => {
    const targetSection = document.getElementById("services");
    targetSection?.scrollIntoView({ behavior: "smooth" });
  };

  //Testimonials
  const [testimonials, setTestimonials] = useState([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await ApiService.getReviews(); //Cambiar getCategories por testimonials o como llamen el endpoint
        setTestimonials(data.result || []);
      } catch (err) {
        setError(err.message || "Fallo al optener testimonios");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);
  console.log(testimonials);

  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) =>
          prev === testimonials.length - 1 ? 0 : prev + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [testimonials.length]);
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={img1}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Find the Perfect Freelancer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8"
          >
            Get your projects done by world-class talent
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            onClick={scrollToSection}
          >
            Explore Services
          </motion.button>
        </div>
      </section>

      {/* Categories Section */}
      <section id="services" className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Popular Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              onClick={() => navigate(category.nextClick)}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center cursor-pointer transition-all duration-300"
            >
              <div className="text-3xl text-blue-600 mb-4">{category.icon}</div>
              <h3 className="font-semibold mb-2">{category.name}</h3>
              <p className="text-sm text-gray-600">{category.count}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <motion.div
                key={service.id}
                onClick={() => navigate(service.nextClick)}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={`https://${service.image}`}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {service.subCategory}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-bold">
                      ${service.price}
                    </span>
                    <button className="flex items-center text-blue-600 hover:text-blue-700">
                      View Details <BsArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="relative overflow-hidden">
            {loading && <p>Loading testimonials...</p>}
            {Array.isArray(testimonials) && testimonials.length > 0 ? (
              <motion.div
                animate={{ x: `-${currentTestimonial * 100}%` }}
                transition={{ duration: 0.5 }}
                className="flex"
              >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4 md:px-20"
                >
                  <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.user.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <p className="text-gray-600 text-lg mb-4">
                      {testimonial.content}
                    </p>
                    <div className="flex justify-center mb-2">
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <FaStar key={index} className="text-yellow-400" />
                      ))}
                    </div>
                    <h4 className="font-semibold">{testimonial.user.name}</h4>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
              </motion.div>
            ) : (
              !loading && <p>No testimonials available.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
