import { useState } from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import ApiService from "../../API/GetEndPoints";

const RegisterFreelancer = () => {
  const [formData, setFormData] = useState(() => {
    const storedIdUser = localStorage.getItem("id_user");
    return {
      phone: "",
      skills: "",
      portfolioLink: "",
      description: "",
      linkedIn: "",
      twitter: "",
      instagram: "",
      certifications: "",
      hourlyRate: "",
      id_user: storedIdUser || "",
    };
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Invalid email format";
      case "phone":
        return /^\d+$/.test(value) ? "" : "Phone number must be numeric";
      case "portfolioLink":
        return value.trim() ? "" : "Portfolio link is required";
      default:
        return "";
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const data = await ApiService.addInfoUser(formData);
        console.log("Form submitted successfully:", data);

        if (data.status) {
          localStorage.setItem("typeRole", "freelancer");
          alert("Información guardada exitosamente");
          window.location.href = "/freelancer/dashboard";
        } else {
          alert("Error al guardar la información: " + data.message);
        }
      } catch (error) {
        console.error("Submission error:", error);
        alert("Ocurrió un error al enviar la información. Inténtalo de nuevo.");
      }
    } else {
      console.warn("Validation errors:", newErrors);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Professional Registration Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                  errors.phone ? "border-red-500" : ""
                }`}
                aria-label="Phone Number"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="portfolioLink"
                className="block text-sm font-medium text-gray-700"
              >
                Portfolio Link *
              </label>
              <input
                type="url"
                id="portfolioLink"
                name="portfolioLink"
                required
                value={formData.portfolioLink}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                  errors.portfolioLink ? "border-red-500" : ""
                }`}
                aria-label="Portfolio Link"
              />
              {errors.portfolioLink && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.portfolioLink}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="skills"
              className="block text-sm font-medium text-gray-700"
            >
              Professional Skills *
            </label>
            <input
              type="text"
              id="skills"
              name="skills"
              required
              value={formData.skills}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="e.g., Web Development, UI/UX Design, Digital Marketing"
              aria-label="Professional Skills"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description of Services *
            </label>
            <textarea
              id="description"
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              aria-label="Description of Services"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label
                htmlFor="linkedIn"
                className="block text-sm font-medium text-gray-700"
              >
                <FaLinkedin className="inline mr-2" />
                LinkedIn Profile
              </label>
              <input
                type="url"
                id="linkedIn"
                name="linkedIn"
                value={formData.linkedIn}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                aria-label="LinkedIn Profile"
              />
            </div>

            <div>
              <label
                htmlFor="twitter"
                className="block text-sm font-medium text-gray-700"
              >
                <FaTwitter className="inline mr-2" />
                Twitter Profile
              </label>
              <input
                type="url"
                id="twitter"
                name="twitter"
                value={formData.twitter}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                aria-label="Twitter Profile"
              />
            </div>

            <div>
              <label
                htmlFor="instagram"
                className="block text-sm font-medium text-gray-700"
              >
                <FaInstagram className="inline mr-2" />
                Instagram Profile
              </label>
              <input
                type="url"
                id="instagram"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                aria-label="Instagram Profile"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="certifications"
                className="block text-sm font-medium text-gray-700"
              >
                Certifications
              </label>
              <input
                type="text"
                id="certifications"
                name="certifications"
                value={formData.certifications}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="e.g., AWS Certified, Google Analytics"
                aria-label="Certifications"
              />
            </div>

            <div>
              <label
                htmlFor="hourlyRate"
                className="block text-sm font-medium text-gray-700"
              >
                Hourly Rate (USD)
              </label>
              <input
                type="number"
                id="hourlyRate"
                name="hourlyRate"
                value={formData.hourlyRate}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="e.g., 50"
                aria-label="Hourly Rate"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Register"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                  Processing...
                </div>
              ) : (
                "Register"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterFreelancer;
