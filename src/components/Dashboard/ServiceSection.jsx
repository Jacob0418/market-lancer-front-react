import React, { useState } from "react";
import { FiEdit2, FiX, FiPlus } from "react-icons/fi";

const ServicesSection = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    subcategory: "",
    image: "",
    price: "",
    sellerName: "",
    description: "",
  });

  const dummyServices = [
    {
      id: 1,
      title: "Web Development",
      category: "Development",
      subcategory: "Frontend",
      image: "images.unsplash.com/photo-1517694712202-14dd9538aa97",
      price: "$99/hr",
      sellerName: "John Doe",
      description:
        "Professional web development services using modern technologies.",
    },
    {
      id: 2,
      title: "UI/UX Design",
      category: "Design",
      subcategory: "User Interface",
      image: "images.unsplash.com/photo-1561070791-2526d30994b5",
      price: "$85/hr",
      sellerName: "Jane Smith",
      description:
        "Create beautiful and intuitive user interfaces for your applications.",
    },
    {
      id: 3,
      title: "Mobile App Development",
      category: "Development",
      subcategory: "Mobile",
      image: "images.unsplash.com/photo-1522199755839-a2bacb67c546",
      price: "$120/hr",
      sellerName: "Mike Johnson",
      description:
        "Expert mobile app development for iOS and Android platforms.",
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setShowCreateModal(false);
    setFormData({
      title: "",
      category: "",
      subcategory: "",
      image: "",
      price: "",
      sellerName: "",
      description: "",
    });
  };

  const handleCardClick = (service) => {
    setSelectedService(service);
    setShowDetailModal(true);
  };

  const handleEdit = () => {
    setFormData(selectedService);
    setShowDetailModal(false);
    setShowEditModal(true);
  };

  const Modal = ({ show, onClose, title, children }) => {
    if (!show) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={onClose}
        ></div>
        <div className="relative z-50 w-full max-w-2xl p-6 mx-4 bg-white rounded-lg shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-700"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>
          {children}
        </div>
      </div>
    );
  };

  const ServiceForm = ({ isEdit }) => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Subcategory</label>
          <input
            type="text"
            name="subcategory"
            value={formData.subcategory}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
      </div>
      <div>
        <label className="block mb-1 font-medium">Image URL</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Price</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Seller Name</label>
          <input
            type="text"
            name="sellerName"
            value={formData.sellerName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
      </div>
      <div>
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md"
          rows="4"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >
        {isEdit ? "Update Service" : "Create Service"}
      </button>
    </form>
  );

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">Services</h1>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          <FiPlus className="w-5 h-5 mr-2" />
          Create Service
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dummyServices.map((service) => (
          <div
            key={service.id}
            onClick={() => handleCardClick(service)}
            className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-xl"
          >
            <img
              src={`https://${service.image}`}
              alt={service.title}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
              <p className="mb-2 text-sm text-gray-600">
                {service.category} - {service.subcategory}
              </p>
              <p className="mb-2 text-lg font-semibold text-blue-600">
                {service.price}
              </p>
              <p className="mb-2 text-sm text-gray-500">
                Seller: {service.sellerName}
              </p>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Modal
        show={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        title="Create New Service"
      >
        <ServiceForm isEdit={false} />
      </Modal>

      <Modal
        show={showDetailModal}
        onClose={() => setShowDetailModal(false)}
        title="Service Details"
      >
        {selectedService && (
          <div className="space-y-4">
            <img
              src={`https://${selectedService.image}`}
              alt={selectedService.title}
              className="object-cover w-full h-64 rounded-lg"
            />
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">{selectedService.title}</h3>
              <p className="text-gray-600">
                {selectedService.category} - {selectedService.subcategory}
              </p>
              <p className="text-xl font-semibold text-blue-600">
                {selectedService.price}
              </p>
              <p className="text-gray-500">
                Seller: {selectedService.sellerName}
              </p>
              <p className="text-gray-700">{selectedService.description}</p>
            </div>
            <button
              onClick={handleEdit}
              className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              <FiEdit2 className="w-5 h-5 mr-2" />
              Edit Service
            </button>
          </div>
        )}
      </Modal>

      <Modal
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
        title="Edit Service"
      >
        <ServiceForm isEdit={true} />
      </Modal>
    </div>
  );
};

export default ServicesSection;
