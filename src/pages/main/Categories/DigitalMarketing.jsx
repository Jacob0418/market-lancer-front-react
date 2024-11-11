import React,{useEffect} from "react";
import { FaBullhorn, FaChartLine, FaEnvelope, FaPenNib, FaSearchDollar, FaUsers } from "react-icons/fa";


import ServiceCategory from "../../../components/Home/ServiceCategory";

const DigitalMarketing = () => {
    useEffect(() => {
        // Desplaza la vista hacia arriba al cargar el componente porque iniciaba desde abajo
        window.scrollTo(0, 0);
      }, []); 
      const categories = [
        { name: "All", icon: <FaBullhorn /> },
        { name: "Social Media Marketing", icon: <FaUsers /> },
        { name: "SEO", icon: <FaSearchDollar /> },
        { name: "Email Marketing", icon: <FaEnvelope /> },
        { name: "Content Marketing", icon: <FaPenNib /> },
        { name: "Analytics", icon: <FaChartLine /> },
      ];
      

      const services = [
        {
          id: 1,
          title: "Social Media Marketing",
          category: "Social Media Marketing",
          image: "images.unsplash.com/photo-1542744095-fcf48d80b0fd",
          rating: 4.8,
          price: 299,
          seller: "SocialBoost",
          description: "Increase your brand's reach through targeted social media campaigns.",
        },
        {
          id: 2,
          title: "SEO Optimization",
          category: "SEO",
          image: "images.unsplash.com/photo-1507525428034-b723cf961d3e",
          rating: 4.9,
          price: 499,
          seller: "SEO Experts",
          description: "Enhance your search engine visibility with expert SEO services.",
        },
        {
          id: 3,
          title: "Email Marketing Campaigns",
          category: "Email Marketing",
          image: "images.unsplash.com/photo-1557200134-90327ee9fafa",
          rating: 4.7,
          price: 399,
          seller: "MailerPro",
          description: "Customized email campaigns to boost customer engagement.",
        },
        {
          id: 4,
          title: "Content Creation for Marketing",
          category: "Content Marketing",
          image: "images.unsplash.com/photo-1504384308090-c894fdcc538d",
          rating: 4.6,
          price: 350,
          seller: "ContentWorks",
          description: "High-quality content creation for blog posts, articles, and more.",
        },
      ];
      

  return (
    <ServiceCategory
      title="Digital Marketing"
      description="Discover top-rated development services tailored to your needs"
      categories={categories}
      services={services}
    />
  );
};

export default DigitalMarketing;
