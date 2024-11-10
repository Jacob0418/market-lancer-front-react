import React, { useState, useRef } from "react";
import {
  FaPlay,
  FaCheck,
  FaArrowRight,
  FaUserCircle,
  FaStore,
  FaVideo,
} from "react-icons/fa";

const Overview = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (!isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const sections = [
    {
      id: 1,
      title: "Aprenda qué hace un perfil",
      description:
        "Descubre cómo crear un perfil efectivo que destaque en el mercado y atraiga a los clientes ideales.",
      icon: FaUserCircle,
    },
    {
      id: 2,
      title: "Crea tu perfil de vendedor",
      description:
        "Personaliza tu perfil profesional con información relevante, habilidades y experiencia única.",
      icon: FaStore,
    },
    {
      id: 3,
      title: "Publica tu Gig",
      description:
        "Aprende a crear y publicar ofertas atractivas que maximicen tus oportunidades de venta.",
      icon: FaVideo,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              ¿Listo para empezar a vender?
            </h1>

            <div className="space-y-6">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                  role="article"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <section.icon className="text-white w-4 h-4" />{" "}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        {section.title}
                      </h2>
                      <p className="text-gray-600">{section.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() =>
                (window.location.href = "/seller_onboarding/overview/do")
              }
              className="w-full py-4 px-6 bg-green-700 text-white font-semibold rounded-lg shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
              aria-label="Continuar al siguiente paso"
            >
              Continuar
            </button>
          </div>

          {/* Right Column */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <div className="aspect-w-16 aspect-h-9">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YnVzaW5lc3N8fHx8fHwxNzA2NjE1NjQw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
              >
                <source
                  src="https://example.com/sample-video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              {!isPlaying && (
                <button
                  onClick={handlePlayVideo}
                  className="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-50 transition-opacity duration-300"
                  aria-label="Reproducir video"
                >
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <FaPlay className="text-blue-600 w-8 h-8 ml-2" />
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
