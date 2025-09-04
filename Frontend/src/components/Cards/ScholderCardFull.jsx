import { ChartColumnStacked, Clock } from "lucide-react";
import useAxios from "../../hook/use-axios";
import api from "../../helper/axios-instance";
import { useEffect } from "react";

const ScholderCardFull = () => {
  const { fetchData, response } = useAxios(api);
  const { id } = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    try {
      fetchData("GET", `usuarios/${id}/reservas`);
    } catch (err) {
      console.error("Erro ao buscar reservas:", err);
    }
  }, [fetchData, id]);

  const totalHours = () => {
    if (!response || response?.data?.result === 0) return 0;
    const reservations = response?.data?.reservations || [];
    const total = reservations.reduce((acc, reservation) => {
      const start = parseInt(reservation.horario.inicio.split(":")[0], 10);
      const end = parseInt(reservation.horario.fim.split(":")[0], 10);
      return acc + (end - start);
    }, 0);
    return total;
  };

  return (
    <div className="bg-white duration-150 hover:shadow-[0_0_10px_10px_rgba(0,255,0,0.1)] hover:-translate-y-1 shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded p-6 flex flex-col gap-4">
      <header className="flex gap-3 items-center">
        <span className="bg-gray-200 p-2 text-primary rounded">
          <Clock size={25} />
        </span>
        <h2 className="font-medium text-[1.2rem] text-text">
          Horas Utilizadas
        </h2>
      </header>
      <span className="font-extrabold text-4xl -mb-0.5">{totalHours()}h</span>
      <p className="text-text-secundary">Total de horas reservadas este mês</p>
      <footer>
        <button
          onClick={() =>
            alert("Desculpas, funcionalidade disponivel mais tarde. ;(")
          }
          className="cursor-pointer hover:bg-primary-dark flex gap-2 items-center py-2 px-4 text-white bg-primary rounded"
        >
          <ChartColumnStacked size={15} />
          Ver relatório
        </button>
      </footer>
    </div>
  );
};

export default ScholderCardFull;
