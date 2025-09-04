import { Trash, ChevronLeft } from "lucide-react";
import useAxios from "../../hook/use-axios";
import api from "../../helper/axios-instance";

const ConfirmeDeleteModal = ({ close, reservation }) => {
  const { fetchData } = useAxios(api);
  console.log(reservation);

  const handlerEdit = () => {
    fetchData(
      "DELETE",
      `usuarios/${reservation.usuarioId}/reservas/${reservation.id}`,
    );
    alert("Reserva cancelada com sucesso!");
    close();
  };

  const formatTime = (timeString) => {
    const [hour, minute] = timeString.split(":");
    let h = parseInt(hour, 10);
    const ampm = h >= 12 ? "PM" : "AM";
    const formattedHour = h.toString().padStart(2, "0");
    return `${formattedHour}:${minute} ${ampm}`;
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] h-full w-full flex items-center justify-center">
      <div className="max-w-[95%] shadow-lg bg-white space-y-2.5 ">
        <h2 className="p-5 font-bold text-white text-2xl bg-red-500">
          Confimar Cancelamento
        </h2>
        <div className="p-4 pt-0 space-y-3">
          <h3 className="font-semibold">
            Tem certeza que deseja cancelar esta reserva?
          </h3>
          <div className="bg-gray-300 p-3 rounded space-y-2">
            <div className="flex items-center justify-between">
              <span>Data:</span>
              <span className="font-semibold">{reservation.data}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Horário:</span>
              <span className="font-semibold">
                {formatTime(reservation.horario.inicio)} {"-"}
                {formatTime(reservation.horario.fim)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Sala:</span>
              <span className="font-semibold">{reservation.sala.nome}</span>
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
              onClick={handlerEdit}
              className="p-3 flex text-white items-center gap-1 rounded cursor-pointer bg-red-500 hover:bg-red-600"
            >
              <Trash size={18} />
              Confirmar cancelamento
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmeDeleteModal;
