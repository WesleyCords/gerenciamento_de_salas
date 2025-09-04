import { useEffect } from "react";
import api from "../../helper/axios-instance";
import useAxios from "../../hook/use-axios";

const NextReservaCard = () => {
  const { fetchData, response } = useAxios(api);
  const { id } = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    try {
      fetchData("GET", `usuarios/${id}/reservas`);
    } catch (err) {
      console.error("Erro ao buscar reservas:", err);
    }
  }, [fetchData, id]);
  const reservations = response?.data?.reservations || [];

  const formatTime = (timeString) => {
    const [hour, minute] = timeString.split(":");
    let h = parseInt(hour, 10);
    const ampm = h >= 12 ? "PM" : "AM";
    const formattedHour = h.toString().padStart(2, "0");
    return `${formattedHour}:${minute} ${ampm}`;
  };

  const isWhatData = (data) => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();
    const [year, month, day] = data.split("-").map(Number);
    if (year === currentYear) {
      if (month === currentMonth) {
        if (day === currentDay) {
          return "Hoje";
        }
        if (day === currentDay + 1) {
          return "Amanhã";
        }
        return data;
      }
      return data;
    }
    return data;
  };

  return (
    <>
      {reservations.map((res) => (
        <div className="space-y-1">
          <h3 className="text-text font-semibold text-[1rem]">
            {res.sala.nome}
          </h3>
          <div className="text-text-secundary text-[0.9rem]">
            <span>
              {isWhatData(res.data)}
              {" , "}
            </span>
            <span>
              {formatTime(res.horario.inicio)} - {formatTime(res.horario.fim)}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default NextReservaCard;
