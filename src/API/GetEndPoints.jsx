import axios from "axios";
import { API_ENDPOINTS } from "./EndPoints";

// Configuración global de Axios
const axiosInstance = axios.create({
  baseURL: API_ENDPOINTS.BASE_URL, // Configuración opcional si el BASE_URL es constante
  timeout: 10000, // Tiempo máximo de espera (ms)
  headers: {
    "Content-Type": "application/json",
  },
});

const ApiService = {
  // ================INI CATEGORIES==============
  getCategories: async () => {
    try {
      const response = await axiosInstance.get(API_ENDPOINTS.CATEGORY.GET);
      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error; // Lanza el error para que el componente lo maneje
    }
  },

  getCategoryById: async (categoryId) => {
    try {
      const response = await axiosInstance.get(
        API_ENDPOINTS.CATEGORY.GET_BY_ID(categoryId)
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching category with ID ${categoryId}:`, error);
      throw error;
    }
  },

  createCategory: async (categoryData) => {
    try {
      const response = await axiosInstance.post(
        API_ENDPOINTS.CATEGORY.CREATE,
        categoryData
      );
      return response.data;
    } catch (error) {
      console.error("Error creating category:", error);
      throw error; // Lanza el error para que el componente lo maneje
    }
  },

  updateCategory: async (categoryId, categoryData) => {
    try {
      const response = await axiosInstance.put(
        API_ENDPOINTS.CATEGORY.UPDATE(categoryId),
        categoryData
      );
      return response.data;
    } catch (error) {
      console.error(`Error updating category with ID ${categoryId}:`, error);
      throw error; // Lanza el error para que el componente lo maneje
    }
  },

  deleteCategory: async (categoryId) => {
    try {
      const response = await axiosInstance.delete(
        API_ENDPOINTS.CATEGORY.DELETE(categoryId)
      );
      return response.data;
    } catch (error) {
      console.error(`Error deleting category with ID ${categoryId}:`, error);
      throw error; // Lanza el error para que el componente lo maneje
    }
  },
  // ================FIN CATEGORIES==============

  // ================INI CHATS==============
  getAllChats: async () => {
    try {
      const response = await axiosInstance.get(API_ENDPOINTS.CHAT.GET_ALL);
      return response.data;
    } catch (error) {
      console.error("Error fetching all chats:", error);
      throw error;
    }
  },

  getChatById: async (chatId) => {
    try {
      const response = await axiosInstance.get(
        API_ENDPOINTS.CHAT.GET_BY_ID(chatId)
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching chat with ID ${chatId}:`, error);
      throw error;
    }
  },

  createChat: async (chatData) => {
    try {
      const response = await axiosInstance.post(
        API_ENDPOINTS.CHAT.CREATE,
        chatData
      );
      return response.data;
    } catch (error) {
      console.error("Error creating chat:", error);
      throw error;
    }
  },

  updateChat: async (chatId, chatData) => {
    try {
      const response = await axiosInstance.put(
        API_ENDPOINTS.CHAT.UPDATE,
        chatData
      );
      return response.data;
    } catch (error) {
      console.error(`Error updating chat with ID ${chatId}:`, error);
      throw error; // Lanza el error para que el componente lo maneje
    }
  },

  deleteChat: async (chatId) => {
    const response = await axiosInstance.delete(
      API_ENDPOINTS.CHAT.DELETE(chatId)
    );
    return response.data;
  },
  // ================FIN CHATS==============

  // ================INI CHATFILES==============
  getAllChatFiles: async () => {
    const response = await axiosInstance.get(API_ENDPOINTS.CHAT_FILES.GET);
    return response.data;
  },

  getChatFileById: async (id) => {
    const response = await axiosInstance.get(
      API_ENDPOINTS.CHAT_FILES.GET_BY_ID(id)
    );
    return response.data;
  },

  createChatFile: async (chatFileData) => {
    const response = await axiosInstance.post(
      API_ENDPOINTS.CHAT_FILES.CREATE,
      chatFileData
    );
    return response.data;
  },

  updateChatFile: async (chatFileData) => {
    const response = await axiosInstance.put(
      API_ENDPOINTS.CHAT_FILES.UPDATE,
      chatFileData
    );
    return response.data;
  },

  deleteChatFile: async (id) => {
    const response = await axiosInstance.delete(
      API_ENDPOINTS.CHAT_FILES.DELETE(id)
    );
    return response.data;
  },
  // ================FIN CHATFILES==============

  // ================INI EXPERIENCE==============
  getExperiences: async () => {
    const response = await axiosInstance.get(API_ENDPOINTS.EXPERIENCE.GET);
    return response.data;
  },

  getExperienceById: async (experienceId) => {
    const response = await axiosInstance.get(
      API_ENDPOINTS.EXPERIENCE.GET_BY_ID(experienceId)
    );
    return response.data;
  },

  createExperience: async (experienceData) => {
    const response = await axiosInstance.post(
      API_ENDPOINTS.EXPERIENCE.CREATE,
      experienceData
    );
    return response.data;
  },

  updateExperience: async (experienceData) => {
    const response = await axiosInstance.put(
      API_ENDPOINTS.EXPERIENCE.UPDATE,
      experienceData
    );
    return response.data;
  },

  deleteExperience: async (experienceId) => {
    const response = await axiosInstance.delete(
      API_ENDPOINTS.EXPERIENCE.DELETE(experienceId)
    );
    return response.data;
  },
  // ================FIN EXPERIENCE==============

  // ================INI IMAGE==============
  getAllImages: async () => {
    try {
      const response = await axiosInstance.get(API_ENDPOINTS.IMAGE.GET);
      return response.data;
    } catch (error) {
      console.error("Error fetching all images:", error);
      throw error;
    }
  },

  getImageById: async (id) => {
    try {
      const response = await axiosInstance.get(
        API_ENDPOINTS.IMAGE.GET_BY_ID(id)
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching image with ID ${id}:`, error);
      throw error;
    }
  },

  createImage: async (imageData) => {
    try {
      const response = await axiosInstance.post(
        API_ENDPOINTS.IMAGE.CREATE,
        imageData
      );
      return response.data;
    } catch (error) {
      console.error("Error creating image:", error);
      throw error;
    }
  },

  updateImage: async (imageData) => {
    try {
      const response = await axiosInstance.put(
        API_ENDPOINTS.IMAGE.UPDATE,
        imageData
      );
      return response.data;
    } catch (error) {
      console.error("Error updating image:", error);
      throw error;
    }
  },

  deleteImage: async (id) => {
    try {
      const response = await axiosInstance.delete(
        API_ENDPOINTS.IMAGE.DELETE(id)
      );
      return response.data;
    } catch (error) {
      console.error(`Error deleting image with ID ${id}:`, error);
      throw error;
    }
  },
  // ================FIN IMAGE==============

  // ================INI SERVICES==============
  getServices: async () => {
    try {
      const response = await axiosInstance.get(API_ENDPOINTS.SERVICE.GET_ALL);
      return response.data;
    } catch (error) {
      console.error("Error fetching services:", error);
      throw error;
    }
  },

  getServiceById: async (id) => {
    try {
      const response = await axiosInstance.get(
        API_ENDPOINTS.SERVICE.GET_BY_ID(id)
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching service with ID ${id}:`, error);
      throw error;
    }
  },

  getReviews: async () => {
    try {
      const response = await axiosInstance.get(API_ENDPOINTS.REVIEW.GET);
      return response.data;
    } catch (error) {
      console.error("Error fetching reviews:", error);
      throw error;
    }
  },

  // ================INI LOGIN==============
  login: async (loginData) => {
    try {
      const response = await axiosInstance.post(
        API_ENDPOINTS.LOGIN.ENTER,
        loginData
      );
      return response.data;
    } catch (error) {
      console.error("Login Error:", error);
      throw error.response ? error.response.data : error.message;
    }
  },
  loginConfirm: async (confirmData) => {
    try {
      const response = await axiosInstance.post(
        API_ENDPOINTS.LOGIN.CONFIRM_CODE,
        confirmData
      );
      return response.data;
    } catch (error) {
      console.error("Login Error:", error);
      throw error.response ? error.response.data : error.message;
    }
  },
  // ================FIN LOGIN==============

  // ================INI USER==============
  getUsers: async () => {
    try {
      const response = await axiosInstance.get(API_ENDPOINTS.USER.GET);
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error.response ? error.response.data : error.message;
    }
  },

  getUserById: async (userId) => {
    try {
      const response = await axiosInstance.get(
        API_ENDPOINTS.USER.GET_BY_ID(userId)
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching user with ID ${userId}:`, error);
      throw error.response ? error.response.data : error.message;
    }
  },

  createUser: async (userData) => {
    try {
      const response = await axiosInstance.post(
        API_ENDPOINTS.USER.CREATE,
        userData
      );
      return response.data;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error.response ? error.response.data : error.message;
    }
  },

  updateUser: async (userId, userData) => {
    try {
      const response = await axiosInstance.put(API_ENDPOINTS.USER.UPDATE, {
        userId,
        ...userData,
      });
      return response.data;
    } catch (error) {
      console.error(`Error updating user with ID ${userId}:`, error);
      throw error.response ? error.response.data : error.message;
    }
  },

  deleteUser: async (userId) => {
    try {
      const response = await axiosInstance.delete(
        API_ENDPOINTS.USER.DELETE(userId)
      );
      return response.data;
    } catch (error) {
      console.error(`Error deleting user with ID ${userId}:`, error);
      throw error.response ? error.response.data : error.message;
    }
  },

  getUserByEmail: async (email) => {
    try {
      const response = await axiosInstance.get(
        API_ENDPOINTS.USER.GET_BY_EMAIL(email)
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching user with email ${email}:`, error);
      throw error.response ? error.response.data : error.message;
    }
  },
  addInfoUser: async (formData) => {
    try {
      const response = await axiosInstance.post(
        API_ENDPOINTS.USER.AddUserInfo,
        formData
      );
      return response.data;
    } catch (error) {
      console.error("Login Error:", error);
      throw error.response ? error.response.data : error.message;
    }
  },
};

export default ApiService;
