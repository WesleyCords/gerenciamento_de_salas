import { Check, ChevronLeft } from "lucide-react";
import useAxios from "../../hook/use-axios";
import api from "../../helper/axios-instance";

const ConfirmReservationModal = ({ close, room, hour, formatTime, data }) => {
  const { fetchData } = useAxios(api);

  const { id } = JSON.parse(localStorage.getItem("user"));

  const handlerEdit = () => {
    fetchData("POST", `usuarios/${id}/reservas`, {
      sala_id: room.id,
      data,
      horario_id: hour.id,
    });
    alert("Reserva realizada com sucesso!");
    close();
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] h-full w-full flex items-center justify-center">
      <div className="max-w-[95%] shadow-lg bg-white space-y-2.5 ">
        <h2 className="p-5 font-bold text-white text-2xl bg-primary">
          Confimar Cancelamento
        </h2>
        <div className="p-4 pt-0 space-y-3">
          <h3 className="font-semibold">Confira os dados da sua reserva</h3>
          <div className="bg-gray-300 p-3 rounded space-y-2">
            <div className="flex items-center justify-between">
              <span>Data:</span>
              <span className="font-semibold">{data}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Horário:</span>
              <span className="font-semibold">
                {formatTime(hour.inicio)} - {formatTime(hour.fim)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Sala:</span>
              <span className="font-semibold">{room.nome}</span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-end gap-3 font-[500]">
            <button
              onClick={close}
              className="hover:bg-gray-300 flex items-center gap-1 p-3 rounded cursor-pointer"
            >
              <ChevronLeft size={18} />
              Cancelar
            </button>
            <button
              onClick={() => handlerEdit()}
              className="p-3 flex text-white items-center gap-1 rounded cursor-pointer bg-primary hover:bg-primary-dark"
            >
              <Check size={18} />
              Confirmar reserva
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmReservationModal;
