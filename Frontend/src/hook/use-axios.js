import { useState, useCallback, useRef } from "react";
import axios from "axios";

const useAxios = (axiosInstance) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const controllerRef = useRef(null);

  // Chamada da API
  const fetchData = useCallback(
    async (method, url, reqData = {}) => {
      setResponse(null);
      setError("");
      setLoading(true);

      // Cria uma "ligação" de cancelamento
      const ctrl = new AbortController();
      controllerRef.current = ctrl;

      try {
        const res = await axiosInstance({
          method: method.toLowerCase(),
          url: url,
          params: method.toLowerCase() === "get" ? reqData : undefined,
          data: method.toLowerCase() !== "get" ? reqData : undefined,
          signal: controllerRef.current.signal, // Telefone para ouvir se foi cancelada (true/false)
        });

        setResponse(res.data);
        return res.data;
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled:", err.message);
        } else {
          setError(
            err.response?.data?.message || err.message || "Ocorreu um erro.",
          );
        }
      } finally {
        setLoading(false);
      }
    },
    [axiosInstance],
  ); // Apenas a instancia do Axios é estável

  // Função para se usar quando quer aborta uma chamada. Usa em um return de useEffect
  const cancel = useCallback(() => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
  }, []);

  return { response, loading, error, fetchData, cancel };
};

export default useAxios;
