import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import ApiService from "../../API/GetEndPoints";

const VerificationModal = ({ isOpen, onClose, id_user }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  console.log("id:user_confir ", id_user, " <--");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 6) {
      setCode(value);
      setError("");
    }
  };

  const handleSubmit = async () => {
    if (code.length !== 6) {
      setError("Please enter a 6-digit code");
      return;
    }

    setIsLoading(true);
    try {
      const data = await ApiService.loginConfirm({ id_user, code });
      console.log("Login successful:", data);
      if (data.status) {
        window.location.href = "/";
      }
    } catch (err) {
      // Maneja el error
      console.error("Login failed:", err);
      setError("Login failed: " + (err.message || err)); // Muestra el mensaje de error
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 shadow-xl transition-all"
          >
            <div className="absolute right-4 top-4">
              <button
                onClick={onClose}
                className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Close modal"
              >
                <IoMdClose className="h-6 w-6" />
              </button>
            </div>

            <div className="text-center">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Enter Verification Code
              </h2>
              <p className="mb-6 text-sm text-gray-600">
                Please enter the 6-digit verification code sent to your device
              </p>

              <div className="mb-4">
                <input
                  type="text"
                  value={code}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyPress}
                  className={`w-full rounded-lg border px-4 py-3 text-center text-2xl tracking-widest ${
                    error
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                  } focus:outline-none focus:ring-4 transition-all`}
                  placeholder="000000"
                  maxLength="6"
                  autoFocus
                  aria-label="Enter 6-digit verification code"
                />
                {error && (
                  <p className="mt-2 text-sm text-red-600" role="alert">
                    {error}
                  </p>
                )}
              </div>

              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full rounded-lg bg-blue-600 px-4 py-3 text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:bg-blue-400"
              >
                {isLoading ? "Verifying..." : "Verify Code"}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default VerificationModal;
