import Axios from "axios";
import { useNavigate } from "react-router-dom";

const api = Axios.create({
    baseURL: "http://localhost:8081/api"
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
    if (error.response.status === 401) {
      const navigate = useNavigate()
      localStorage.removeItem('token');
      navigate('/login')
    }
    return Promise.reject(error);
  }
);

export default api