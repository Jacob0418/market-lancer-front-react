import React, { useState } from "react";
import {
  FaUsers,
  FaBullseye,
  FaEye,
  FaHeart,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const AboutUs = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const values = [
    {
      id: 1,
      title: "Cliente Primero",
      description:
        "Priorizamos las necesidades y satisfacción de nuestros clientes por encima de todo.",
    },
    {
      id: 2,
      title: "Innovación",
      description:
        "Empujando continuamente los límites para ofrecer soluciones de vanguardia.",
    },
    {
      id: 3,
      title: "Integridad",
      description:
        "Manteniendo los más altos estándares de honestidad y transparencia en todos los tratos.",
    },
    {
      id: 4,
      title: "Excelencia",
      description:
        "Esforzándonos por alcanzar la excelencia en cada proyecto que emprendemos.",
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "¿Cómo funciona su plataforma?",
      answer:
        "Nuestra plataforma conecta a freelancers capacitados con clientes que buscan servicios profesionales. Navega, contrata y colabora sin problemas.",
    },
    {
      id: 2,
      question: "¿Qué métodos de pago aceptan?",
      answer:
        "Aceptamos tarjetas de crédito principales, PayPal y transferencias bancarias. Todas las transacciones son seguras y protegidas.",
    },
    {
      id: 3,
      question: "¿Cómo aseguran la calidad del servicio?",
      answer:
        "Mantenemos estrictos estándares de calidad a través de nuestro proceso de selección, sistema de calificación y monitoreo continuo.",
    },
    {
      id: 4,
      question: "¿Cuál es su política de reembolso?",
      answer:
        "Ofrecemos una garantía de devolución de dinero si no está satisfecho con el servicio, sujeto a nuestros términos y condiciones.",
    },
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
      {/* Who We Are Section */}
      <div className="mb-20">
        <div className="flex items-center justify-center mb-8">
          <FaUsers className="text-4xl text-blue-600 mr-4" />
          <h2 className="text-4xl font-bold text-gray-800">¿Quienes Sómos?</h2>
        </div>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
          Somos una plataforma líder en el mercado de freelancers que conecta a
          profesionales talentosos con empresas de todo el mundo. Nuestra
          plataforma innovadora permite una colaboración fluida y una entrega de
          servicios excepcional.
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <FaBullseye className="text-3xl text-blue-600 mr-3" />
            <h3 className="text-3xl font-bold text-gray-800">Nuestra Misión</h3>
          </div>
          <p className="text-lg text-gray-600">
            Revolucionar la industria del trabajo freelance creando
            oportunidades y fomentando conexiones significativas entre
            profesionales talentosos y empresas a nivel mundial incluyendo la UT
            de Cancún.
          </p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <FaEye className="text-3xl text-blue-600 mr-3" />
            <h3 className="text-3xl font-bold text-gray-800">Nuestra Visión</h3>
          </div>
          <p className="text-lg text-gray-600">
            Convertirse en el mercado freelance más confiable e innovador del
            mundo, empoderando a millones para alcanzar sus sueños
            profesionales.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-20">
        <div className="flex items-center justify-center mb-12">
          <FaHeart className="text-4xl text-blue-600 mr-4" />
          <h2 className="text-4xl font-bold text-gray-800">Nuestros Valores</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div
              key={value.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                {value.title}
              </h4>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <div className="flex items-center justify-center mb-12">
          <FaQuestionCircle className="text-4xl text-blue-600 mr-4" />
          <h2 className="text-4xl font-bold text-gray-800">
            Preguntas Frecuentes
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <div key={faq.id} className="mb-4">
              <button
                className="w-full flex items-center justify-between bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={openFaq === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </span>
                {openFaq === faq.id ? (
                  <FaChevronUp className="text-blue-600" />
                ) : (
                  <FaChevronDown className="text-blue-600" />
                )}
              </button>
              {openFaq === faq.id && (
                <div
                  id={`faq-answer-${faq.id}`}
                  className="bg-white px-6 py-4 rounded-b-lg shadow-md"
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
