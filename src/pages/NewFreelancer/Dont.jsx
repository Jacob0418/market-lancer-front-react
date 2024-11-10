import React from "react";
import {
  FaUserSlash,
  FaBan,
  FaExclamationTriangle,
  FaHandshakeSlash,
} from "react-icons/fa";

const Dont = () => {
  const cards = [
    {
      icon: <FaUserSlash className="text-3xl text-red-600" />,
      title: "Complete Profile",
      description:
        "Proporcionar información engañosa o inexacta sobre su identidad.",
    },
    {
      icon: <FaBan className="text-3xl text-red-600" />,
      title: "Engagement",
      description:
        "Apertura de cuentas duplicadas. Recuerda, siempre puedes crear más Gigs.",
    },
    {
      icon: <FaExclamationTriangle className="text-3xl text-red-600" />,
      title: "Quality Content",
      description:
        "Solicitar a otros miembros de la comunidad que trabajen en la UT.",
    },
    {
      icon: <FaHandshakeSlash className="text-3xl text-red-600" />,
      title: "Visual Appeal",
      description:
        "Solicitar llevar la comunicación y el pago fuera de Market Lancer.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-[35%] h-[300px] md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt="Success Profile"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3";
              }}
            />
          </div>
          <div className="md:w-[65%] p-6 md:p-8">
            <div className="mb-8">
              <h1
                className="text-3xl font-bold text-gray-800 mb-3"
                role="heading"
              >
                Ahora, hablemos de las cosas que debes evitar.
              </h1>
              <p className="text-gray-600">
                Tu éxito en Market Lancer es importante para nosotros. Evite lo
                siguiente para mantenerse en linea con nuestras normas
                comunitarias:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1 focus-within:ring-2 focus-within:ring-blue-400"
                  role="article"
                  tabIndex="0"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-3">{card.icon}</div>
                    {/* <h3 className="font-semibold text-gray-800 mb-2">{card.title}</h3> */}
                    <p className="text-sm text-gray-600">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <button
                onClick={() =>
                  (window.location.href = "/seller_onboarding/overview/do")
                }
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg transition-all duration-300 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                aria-label="Go back"
              >
                Atrás
              </button>
              <button
                onClick={() =>
                  (window.location.href = "/seller_onboarding/personal_info")
                }
                className="px-6 py-2 bg-blue-600 text-white rounded-lg transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Continue to next step"
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dont;
