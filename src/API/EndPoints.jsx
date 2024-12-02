const BASE_URL =
  "https://market-lancer-back-dotnet-production-b498.up.railway.app";
const BASE_URL2 = "https://backend-marketlancer.onrender.com";

export const API_ENDPOINTS = {
  //CATEGORY
  CATEGORY: {
    GET: `${BASE_URL}/api/category/allCategory`,
    GET_BY_ID: (categoryId) =>
      `${BASE_URL}/api/category/categoryById/${categoryId}`,
    CREATE: `${BASE_URL}/api/category/createCategory`,
    UPDATE: (categoryId) => `${BASE_URL}/categories/${categoryId}`,
    DELETE: (categoryId) =>
      `${BASE_URL}/api/category/deleteCategory/${categoryId}`,
  },
  //cHAT
  CHAT: {
    GET_ALL: `${BASE_URL}/api/chat/allChat`,
    GET_BY_ID: (chatId) => `${BASE_URL}/api/chat/chatById/${chatId}`,
    UPDATE: `${BASE_URL}/api/chat/updateChat`,
    DELETE: (chatId) => `${BASE_URL}/api/chat/deleteChat/${chatId}`,
    CREATE: `${BASE_URL}/api/chat/createChat`,
  },
  //CHATFILES
  CHAT_FILES: {
    GET: `${BASE_URL}/api/chatFiles/allChatFiles`,
    GET_BY_ID: (id) => `${BASE_URL}/api/chatFiles/chatFilesById/${id}`,
    CREATE: `${BASE_URL}/api/chatFiles/createChatFiles`,
    UPDATE: `${BASE_URL}/api/chatFiles/updateChatFiles`,
    DELETE: (id) => `${BASE_URL}/api/chatFiles/deleteChatFiles/${id}`,
  },
  //EXPERIENCE
  EXPERIENCE: {
    GET: `${BASE_URL}/api/experience/allExperience`,
    GET_BY_ID: (experienceId) =>
      `${BASE_URL}/api/experience/experienceById/${experienceId}`,
    CREATE: `${BASE_URL}/api/experience/createExperience`,
    UPDATE: `${BASE_URL}/api/experience/updateExperience`,
    DELETE: (experienceId) =>
      `${BASE_URL}/api/experience/deleteExperience/${experienceId}`,
  },
  //IMG
  IMAGE: {
    GET: `${BASE_URL}/api/image/allImage`,
    GET_BY_ID: (id) => `${BASE_URL}/api/image/imageById/${id}`,
    UPDATE: `${BASE_URL}/api/image/updateImage`,
    DELETE: (id) => `${BASE_URL}/api/image/deleteImage/${id}`,
    CREATE: `${BASE_URL}/api/image/createImage`,
  },
  //LOGIN
  LOGIN: {
    ENTER: `${BASE_URL2}/api/login/`, // Endpoint para iniciar sesión
    CONFIRM_CODE: `${BASE_URL2}/api/login/confirm`,
  },
  //REVIEW
  REVIEW: {
    GET: `${BASE_URL}/api/review/allReview`,
    GET_BY_ID: (id) => `${BASE_URL}/api/review/reviewById/${id}`,
    CREATE: `${BASE_URL}/api/review/createReview`,
    UPDATE: `${BASE_URL}/api/review/updateReview`,
    DELETE: (id) => `${BASE_URL}/api/review/deleteReview/${id}`,
  },
  //ROLES
  ROLE: {
    GET: `${BASE_URL}/api/role/allRole`,
    GET_BY_ID: (roleId) => `${BASE_URL}/api/role/roleById/${roleId}`,
    CREATE: `${BASE_URL}/api/role/createRole`,
    UPDATE: `${BASE_URL}/api/role/updateRole`,
    DELETE: (roleId) => `${BASE_URL}/api/role/deleteRole/${roleId}`,
  },
  //SERVICE
  SERVICE: {
    GET_ALL: `${BASE_URL}/api/service/allService`,
    GET_BY_ID: (serviceId) =>
      `${BASE_URL}/api/service/serviceById/${serviceId}`,
    CREATE: `${BASE_URL}/api/service/createService`,
    UPDATE: `${BASE_URL}/api/service/updateService`,
    DELETE: (serviceId) => `${BASE_URL}/api/service/deleteService/${serviceId}`,
  },
  //USER
  USER: {
    GET: `${BASE_URL}/api/user/allUser`,
    GET_BY_ID: (userId) => `${BASE_URL}/api/user/userById/${userId}`,
    CREATE: `${BASE_URL}/api/user/createUser`,
    UPDATE: (userId) => `${BASE_URL}/api/user/updateUser/${userId}`,
    DELETE: (userId) => `${BASE_URL}/api/user/deleteUser/${userId}`,
    GET_BY_EMAIL: (email) => `${BASE_URL}/api/user/getUserByEmail/${email}`,
    AddUserInfo: `${BASE_URL2}/api/user/addInfo`,
  },
};
