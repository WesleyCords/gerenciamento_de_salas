import Axios from "axios";

const api = Axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})  

// Vai "Interrogar o request" e pegar o token do localstorage e mandar no header de todas as outras requests (exceto a de login e registro)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Aqui "Interroga o response" e envia um error global para quando o token expirar
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/register'
    }
    return Promise.reject(error);
  }
);

export default api