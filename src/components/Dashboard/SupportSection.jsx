import React, { useState, useRef } from "react";
import { IoMdSend } from "react-icons/io";
import {
  FaCloudUploadAlt,
  FaCreditCard,
  FaUserCircle,
  FaQuestion,
  FaComments,
} from "react-icons/fa";
import { MdContentPaste, MdSupportAgent } from "react-icons/md";

const SupportSection = () => {
  const [activeTab, setActiveTab] = useState("chat");
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [feedback, setFeedback] = useState({ rating: 0, comment: "" });
  const fileInputRef = useRef(null);

  const supportCategories = [
    { id: 1, title: "Payment Issues", icon: <FaCreditCard /> },
    { id: 2, title: "Dispute Resolution", icon: <MdContentPaste /> },
    { id: 3, title: "Profile Optimization", icon: <FaUserCircle /> },
    { id: 4, title: "General Support", icon: <MdSupportAgent /> },
  ];

  const faqs = [
    {
      question: "How do I get paid for my services?",
      answer:
        "Payments are processed through our secure payment system once the order is completed and approved by the client.",
    },
    {
      question: "What should I do if there's a dispute?",
      answer:
        "Contact our support team immediately through the chat feature or raise a dispute ticket for resolution.",
    },
    {
      question: "How can I improve my profile visibility?",
      answer:
        "Optimize your profile with relevant keywords, high-quality portfolio items, and maintain good ratings.",
    },
  ];

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: "user" }]);
      setNewMessage("");

      // Simulate AI response
      setTimeout(() => {
        const userMessage = newMessage.toLowerCase();

        // Predefined responses
        const responses = [
          {
            keywords: ["hello", "hi"],
            response: "Hello! How can I assist you today?",
          },
          {
            keywords: ["help", "support"],
            response:
              "I'm here to help! Can you provide more details about your issue?",
          },
          {
            keywords: ["issue", "problem"],
            response: "Could you elaborate on the issue you're experiencing?",
          },
          {
            keywords: ["thank", "thanks"],
            response:
              "You're welcome! Let me know if there's anything else I can do for you.",
          },
          {
            keywords: ["bye", "goodbye"],
            response: "Goodbye! Feel free to reach out again anytime.",
          },
          {
            keywords: ["what are you", "who are you", "que eres", "quién eres"],
            response:
              "I’m a virtual assistant here to help you! Let me know if you have any questions or need support.",
          },
          {
            keywords: ["how do you work", "cómo funcionas"],
            response:
              "I work by processing your queries and providing helpful responses or guiding you to the right solution.",
          },
        ];

        // Default response
        let aiResponse =
          "I'm here to assist you. Could you provide more details or clarify your question?";

        // Match user input with predefined responses
        for (const { keywords, response } of responses) {
          if (keywords.some((word) => userMessage.includes(word))) {
            aiResponse = response;
            break;
          }
        }

        setMessages((prev) => [
          ...prev,
          {
            text: aiResponse,
            sender: "agent",
          },
        ]);
      }, 1000);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", feedback);
    setFeedback({ rating: 0, comment: "" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Support Center
        </h1>
        <p className="text-lg text-gray-600">
          We're here to help you succeed in your freelancing journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Support Categories */}
        {/* <div className="col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <div className="space-y-3">
              {supportCategories.map((category) => (
                <button
                  key={category.id}
                  className="w-full flex items-center p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setActiveTab("chat")}
                >
                  <span className="text-blue-500 mr-3">{category.icon}</span>
                  {category.title}
                </button>
              ))}
            </div>
          </div>
        </div> */}

        {/* Main Content Area */}
        <div className="col-span-1 md:col-span-3">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex space-x-4 mb-6">
              <button
                onClick={() => setActiveTab("chat")}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === "chat"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100"
                }`}
                aria-label="Open chat"
              >
                <FaComments className="inline mr-2" /> Chat
              </button>
              <button
                onClick={() => setActiveTab("faq")}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === "faq" ? "bg-blue-500 text-white" : "bg-gray-100"
                }`}
                aria-label="View FAQs"
              >
                <FaQuestion className="inline mr-2" /> FAQs
              </button>
            </div>

            {activeTab === "chat" && (
              <div>
                {/* Chat Messages */}
                <div className="h-96 overflow-y-auto mb-4 p-4 bg-gray-50 rounded-lg">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`mb-4 ${
                        message.sender === "user" ? "text-right" : "text-left"
                      }`}
                    >
                      <div
                        className={`inline-block p-3 rounded-lg ${
                          message.sender === "user"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200"
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* File Upload */}
                <div className="mb-4">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    className="hidden"
                    aria-label="Upload file"
                  />
                  <button
                    onClick={() => fileInputRef.current.click()}
                    className="flex items-center text-sm text-gray-600 hover:text-blue-500"
                  >
                    <FaCloudUploadAlt className="mr-2" />
                    {selectedFile ? selectedFile.name : "Upload File"}
                  </button>
                </div>

                {/* Message Input */}
                <form onSubmit={handleMessageSubmit} className="flex space-x-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    aria-label="Send message"
                  >
                    <IoMdSend />
                  </button>
                </form>
              </div>
            )}

            {activeTab === "faq" && (
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b pb-4">
                    <h3 className="font-semibold text-lg mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Feedback Form */}
          <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Help Us Improve</h2>
            <form onSubmit={handleFeedbackSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFeedback({ ...feedback, rating: star })}
                      className={`text-2xl ${
                        feedback.rating >= star
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comments
                </label>
                <textarea
                  value={feedback.comment}
                  onChange={(e) =>
                    setFeedback({ ...feedback, comment: e.target.value })
                  }
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
