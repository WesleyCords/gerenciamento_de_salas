import { Plus, CalendarCheck } from "lucide-react";
import { useEffect } from "react";
import useAxios from "../../hook/use-axios";
import api from "../../helper/axios-instance";

const ReservaCardFull = ({ onSelectScreen }) => {
  const { cancel, fetchData, response } = useAxios(api);
  const { id } = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    fetchData("GET", `usuarios/${id}/reservas`);

    return () => cancel();
  }, [fetchData, cancel, id]);

  console.log(response, id);
  return (
    <div className="bg-white duration-150 hover:shadow-[0_0_10px_5px_rgba(0,255,0,0.1)] hover:-translate-y-1 shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded p-6 flex flex-col gap-4">
      <header className="flex gap-3 items-center">
        <span className="bg-gray-200 p-2 text-primary rounded">
          <CalendarCheck size={25} />
        </span>
        <h2 className="font-medium text-[1.2rem] text-text">Suas Reservas</h2>
      </header>
      <span className="font-extrabold text-4xl -mb-0.5">
        {response?.result}
      </span>
      <p className="text-text-secundary text-nowrap">
        {response?.result !== 0
          ? "Reservas agendadas esta semana"
          : "Você ainda não tem nenhuma reserva"}
      </p>
      <footer>
        <button
          onClick={() => {
            alert("Voce sera redirecionado para suas reservas!");
            onSelectScreen("reservas");
          }}
          className="cursor-pointer hover:bg-primary-dark flex gap-2 items-center py-2 px-4 text-white bg-primary rounded"
        >
          <Plus size={15} />
          Nova Reserva
        </button>
      </footer>
    </div>
  );
};

export default ReservaCardFull;
