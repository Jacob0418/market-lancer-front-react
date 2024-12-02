import React, { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGlobe,
  FaEdit,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import ApiService from "../../API/GetEndPoints";

const ProfileSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true); // Para manejar el estado de carga
  const [error, setError] = useState(null);
  const userId = localStorage.getItem("id_user");
  console.log("userId: " + userId);
  const [userData, setUserData] = useState({
    name: "John Doe",
    userName: "johndoe123",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    portfolio_link: "https://johndoe-portfolio.com",
    description:
      "Passionate full-stack developer with 5+ years of experience in building scalable web applications. Specialized in React, Node.js, and cloud technologies.",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    instagram: "https://instagram.com/johndoe",
    certifications: [
      "AWS Certified Solutions Architect",
      "Google Cloud Professional Developer",
      "Microsoft Certified: Azure Developer Associate",
    ],
  });
  const [formData, setFormData] = useState(userData);

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem("id_user");

      if (!userId) {
        setError("User ID not found in localStorage");
        return;
      }

      setLoading(true);
      try {
        // Llamada a la API para obtener los datos del usuario
        const data = await ApiService.getUserById(userId);
        setUserData(data);
        setFormData(data); // Actualiza el estado con los datos de la API
        setLoading(false);
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Error fetching user data");
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);
  console.log(userData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCertificationChange = (index, value) => {
    const updatedCertifications = [...formData.certifications];
    updatedCertifications[index] = value;
    setFormData((prev) => ({
      ...prev,
      certifications: updatedCertifications,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(formData);
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{userData.name}</h1>
          <p className="text-gray-600">@{userData.userName}</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          aria-label="Edit profile"
        >
          <FaEdit /> Edit Profile
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">
              Contact Information
            </h2>
            <div className="mt-2 space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">Email:</span> {userData.email}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Phone:</span> {userData.phone}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Portfolio:</span>
                <a
                  href={userData.portfolio_link}
                  className="text-blue-600 hover:underline flex items-center gap-1"
                >
                  <FaGlobe /> Visit Portfolio
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700">
              Social Media
            </h2>
            <div className="mt-2 flex gap-4">
              <a
                href={userData.linkedin}
                className="text-gray-600 hover:text-blue-600 text-2xl"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
              <a
                href={userData.twitter}
                className="text-gray-600 hover:text-blue-400 text-2xl"
                aria-label="Twitter Profile"
              >
                <FaTwitter />
              </a>
              <a
                href={userData.instagram}
                className="text-gray-600 hover:text-pink-600 text-2xl"
                aria-label="Instagram Profile"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">About</h2>
          <p className="text-gray-600">{userData.description}</p>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Certifications
        </h2>
        <ul className="list-disc list-inside space-y-1">
          {userData.certifications.map((cert, index) => (
            <li key={index} className="text-gray-600">
              {cert}
            </li>
          ))}
        </ul>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Edit Profile</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
                aria-label="Close modal"
              >
                <IoMdClose />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.userName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="portfolio"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Portfolio Link
                  </label>
                  <input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="4"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  ></textarea>
                </div>

                <div>
                  <label
                    htmlFor="linkedin"
                    className="block text-sm font-medium text-gray-700"
                  >
                    LinkedIn
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="twitter"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Twitter
                  </label>
                  <input
                    type="url"
                    id="twitter"
                    name="twitter"
                    value={formData.twitter}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="instagram"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Instagram
                  </label>
                  <input
                    type="url"
                    id="instagram"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Certifications
                </label>
                {formData.certifications.map((cert, index) => (
                  <input
                    key={index}
                    type="text"
                    value={cert}
                    onChange={(e) =>
                      handleCertificationChange(index, e.target.value)
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 mb-2"
                  />
                ))}
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSection;
