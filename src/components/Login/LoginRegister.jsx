import React, { useState } from "react";
import {
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaCapsules,
  FaUserMd,
  FaWind,
  FaRegCommentAlt,
  FaLaughBeam,
  FaBirthdayCake,
  FaChild,
  FaInstagramSquare,
  FaFacebook,
} from "react-icons/fa";
import { motion } from "framer-motion";
import img2 from "../../assets/img/img1.jpg";
import img1 from "../../assets/img/img1.jpg";
import { useNavigate } from "react-router-dom";


const LoginRegister = () => {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    pass: "",
  });
  const [formData2, setFormData2] = useState({
    nombre: "",
    email: "",
    pass: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [isFirstFormVisible, setIsFirstFormVisible] = useState(true);

  const handleNextClick = () => {
    setIsFirstFormVisible(false);
  };
  const handleNextClick2 = () => {
    setIsFirstFormVisible(true);
  };
  const handleLogin = () => {
    navigate()
}

  // const handlePreviousClick = () => {
  //   setIsFirstFormVisible(true);
  // };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setFormData2({ ...formData2, [name]: value });
    validateField2(name, value);
  };
  const validateField2 = (name, value) => {
    let error = "";
    switch (name) {
      case "nombreTutor":
        error = value.trim() === "" ? "El nombre completo es requerido" : "";
        break;
      case "parentesco":
        error = value.trim() === "" ? "Escribe algun parentesco" : "";
        break;

      case "numeroTutor":
        error = !/^\d{10}$/.test(value)
          ? "El número de celular debe tener 10 dígitos"
          : "";
        break;
      case "alergias":
        error = value.trim() === "" ? "Puedes escribir que no tienes" : "";
        break;
      case "medicinas":
        error = value.trim() === "" ? "Puedes escribir que no necesitas" : "";
        break;
      case "enfermedadCronica":
        error = value.trim() === "" ? "Puedes escribir que no tienes" : "";
        break;
      case "abono":
        error = value.trim() === "" ? "Describe sobre tu abono" : "";
        break;
      case "nota":
        error = value.trim() === "" ? "Escribe algo como nota" : "";
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };
  const handleSubmit2 = async (e) => {
    e.preventDefault();

    // Crear un objeto para recolectar los errores
    const formErrors = {};

    // Validar cada campo y recolectar errores
    Object.keys(formData2).forEach((key) => {
      const value = formData2[key];
      let error = "";
      switch (key) {
        case "nombre":
            error = value.trim() === ""? "El nombre completo es requerido" : "";
          break;
        case "email":
          error = value.trim() === "" ? "El Email es requerido" : "";
          break;
        case "pass":
          error = value.trim() === "" ? "Contraseña Requerida" : "";
          break;
        default:
          break;
      }
      // Si hay un error, agregarlo al objeto de errores
      if (error) {
        formErrors[key] = error;
      }
    });

    // Si no hay errores, avanzar al siguiente formulario
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      // Combinar los objetos formData y formData2
      const combinedData = { ...formData, ...formData2 };
      console.log("line 130");
      console.log(combinedData);
      try {
        // Simulando la llamada a la API
        const response = await axios.post(
          "htps://hilarious-merola-canchesky-d538ace7.koyeb.app/users/",
          combinedData
        );

        setIsSubmitting(false);
        setIsSuccess(true);
        alert("Te registraste con exito");
        window.location.reload();

        console.log("Datos enviados con éxito:", response.data);
      } catch (error) {
        console.error("Error al enviar los datos:", error);
        setIsSubmitting(false);
      }
    } else {
      setErrors(formErrors); // Si hay errores, actualizarlos en el estado
    }
  };

  // ----------------------------------------------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "nombreCompleto":
        error = value.trim() === "" ? "El nombre completo es requerido" : "";
        break;
      case "fechaNacimiento":
        error =
          value.trim() === "" ? "La fecha de nacimiento es requerida" : "";
        break;
      case "edad":
        error = value <= 0 ? "La edad debe ser mayor que 0" : "";
        break;
      case "numeroCelular":
        error = !/^\d{10}$/.test(value)
          ? "El número de celular debe tener 10 dígitos"
          : "";
        break;
      case "domicilio":
        error = value.trim() === "" ? "El domicilio es requerido" : "";
        break;
      case "instagram":
        error = value.trim() === "" ? "Puedes escribir que no tienes" : "";
        break;
      case "facebook":
        error = value.trim() === "" ? "Puedes escribir que no tienes" : "";
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear un objeto para recolectar los errores
    const formErrors = {};

    // Validar cada campo y recolectar errores
    Object.keys(formData).forEach((key) => {
      const value = formData[key];
      let error = "";
      switch (key) {
        case "email":
          error = value.trim() === "" ? "El Email es requerido" : "";
          break;
        case "pass":
          error = value.trim() === "" ? "Contraseña Requerida" : "";
          break;

        default:
          break;
      }
      // Si hay un error, agregarlo al objeto de errores
      if (error) {
        formErrors[key] = error;
      }
    });

    // Si no hay errores, avanzar al siguiente formulario
    if (Object.keys(formErrors).length === 0) {
      handleNextClick(); // Si no hay errores, ir al siguiente formulario
    } else {
      setErrors(formErrors); // Si hay errores, actualizarlos en el estado
    }
  };

  return (
    <>
      {isFirstFormVisible ? (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center p-4 md:p-8">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-5xl w-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <img
                src={img1}
                alt="Customer Service"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/70 to-indigo-600/70 flex items-center justify-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
                  Te estamos esperando en Market Lancer.
                </h1>
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Inicia Sesión
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`pl-10 w-full px-4 py-2 border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="ejemplo@proveedor.com"
                      aria-label="email"
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="instagram"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Contraseña
                  </label>
                  <div className="relative">
                    <FaInstagramSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="password"
                      id="pass"
                      name="pass"
                      value={formData.pass}
                      onChange={handleChange}
                      className={`pl-10 w-full px-4 py-2 border ${
                        errors.pass ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Password"
                      aria-label="pass"
                      aria-invalid={errors.pass ? "true" : "false"}
                    />
                  </div>
                  {errors.pass && (
                    <p className="mt-1 text-sm text-red-500">{errors.pass}</p>
                  )}
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Iniciar Sesión"
                  )}
                </motion.button>
                <motion.button
                  type="submit"
                  className="w-full bg-blue-300 text-white py-2 px-4 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNextClick}
                >
                  Registrarse
                </motion.button>
              </form>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-100 text-green-700 rounded-md"
                >
                  Thank you for your submission! We'll get back to you soon.
                </motion.div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center p-4 md:p-8">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-5xl w-full flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Registrarse
              </h2>
              <form onSubmit={handleSubmit2} className="space-y-6">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nombre Completo
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData2.nombre}
                      onChange={handleChange2}
                      className={`pl-10 w-full px-4 py-2 border ${
                        errors.nombre
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Agustin Jackson"
                      aria-label="nombreTutor"
                      aria-invalid={errors.nombre ? "true" : "false"}
                    />
                  </div>
                  {errors.nombre && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.nombre}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData2.email}
                      onChange={handleChange}
                      className={`pl-10 w-full px-4 py-2 border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="ejemplo@proveedor.com"
                      aria-label="email"
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="instagram"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Contraseña
                  </label>
                  <div className="relative">
                    <FaInstagramSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="password"
                      id="pass"
                      name="pass"
                      value={formData2.pass}
                      onChange={handleChange}
                      className={`pl-10 w-full px-4 py-2 border ${
                        errors.pass ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Password"
                      aria-label="pass"
                      aria-invalid={errors.pass ? "true" : "false"}
                    />
                  </div>
                  {errors.pass && (
                    <p className="mt-1 text-sm text-red-500">{errors.pass}</p>
                  )}
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "REGISTRARME"
                  )}
                </motion.button>
                <motion.button
                  type="submit"
                  className="w-full bg-blue-300 text-white py-2 px-4 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNextClick2}
                >
                  Iniciar Sesión
                </motion.button>
              </form>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-100 text-green-700 rounded-md"
                >
                  Gracias por registrate!!!
                </motion.div>
              )}
            </div>
            <div className="md:w-1/2 relative overflow-hidden">
              <img
                src={img2}
                alt="Customer Service"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/70 to-indigo-600/70 flex items-center justify-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
                  No te lo puedes perder!
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginRegister;
