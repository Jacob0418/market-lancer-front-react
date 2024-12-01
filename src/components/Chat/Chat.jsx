import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import {
  FaBold,
  FaItalic,
  FaLink,
  FaTimes,
  FaComments,
  FaBell,
} from "react-icons/fa";
import SendBirdChat from "./SendBirdChat";
import { App as SendBirdApp } from "sendbird-uikit";
import { FiMinimize2 } from "react-icons/fi";
import "sendbird-uikit/dist/index.css";

const Chat = ({isOpen, onClose}) => {
  // const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "¡Hola! ¿Cómo puedo ayudarte hoy?",
      sender: "agent",
      timestamp: new Date().toLocaleTimeString(),
      read: true,
    },
    {
      id: 2,
      text: "Necesito información sobre los servicios",
      sender: "user",
      timestamp: new Date().toLocaleTimeString(),
      read: true,
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [unreadCount, setUnreadCount] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);
  const messageInputRef = useRef(null);
  const chatContainerRef = useRef(null);

  // const toggleModal = () => {
  //   setIsOpen(!isOpen);
  //   setIsMinimized(false);
  //   setUnreadCount(0);
  // };

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* {!isOpen && (
        <button
          onClick={toggleModal}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 flex items-center shadow-lg transition-all duration-300"
          aria-label="Abrir chat"
        >
          <FaComments className="text-2xl" />
          {unreadCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
              {unreadCount}
            </span>
          )}
        </button>
      )} */}

      {/* {isOpen && ( */}
        <>
          <Draggable handle=".drag-handle">
            <div
              className={`bg-white rounded-lg shadow-2xl w-[590px] md:w-[790px] transition-all duration-300 ${
                isMinimized ? "h-14" : "h-[470px] w-[590px] md:h-[670px] md:w-[790px]"
              }`}
              role="dialog"
              aria-modal="true"
              aria-labelledby="chat-modal-title"
            >
              {/* Encabezado */}
              <div className="drag-handle flex items-center justify-between p-4 bg-blue-600 text-white rounded-t-lg cursor-move w-full md:w-[800px]">
                <div className="flex flex-col">
                  <h1 id="chat-modal-title" className="text-lg font-semibold">
                    Chat en línea
                  </h1>
                  <p className="text-sm text-blue-200">
                    Notificaciones activadas
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  {/* Botón de minimizar */}
                  <button
                    onClick={handleMinimize}
                    className="hover:bg-blue-700 p-2 rounded-full"
                    aria-label="Minimizar chat"
                  >
                    <FiMinimize2 className="text-lg" />
                  </button>

                  {/* Botón de cerrar */}
                  <button
                    onClick={onClose}
                    className="hover:bg-blue-700 p-2 rounded-full"
                    aria-label="Cerrar chat"
                  >
                    <FaTimes className="text-lg" />
                  </button>
                </div>
              </div>

              {/* Contenido del chat */}
              <div className="App" style={{ height: 600, width: 800 }}>
                <SendBirdApp
                  appId="0F6B0070-9F2D-4B75-A2A1-6E5AF6625473"
                  userId="Valier"//variable del usuario
                />
              </div>
            </div>
          </Draggable>
        </>
      {/* )} */}
    </div>
  );
};

export default Chat;
