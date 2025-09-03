import { PencilLine, ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import useAxios from "../../hook/use-axios";
import api from "../../helper/axios-instance";

const EditModal = ({ close, reservation }) => {
  const [selectedHourId, setSelectedHourId] = useState(null);

  const [availableHours, setAvailableHours] = useState([]);
  const { fetchData: fetchHours, response: hoursResponse } = useAxios(api);
  const { fetchData: updateReservation } = useAxios(api);

  useEffect(() => {
    if (reservation) {
      fetchHours("GET", `salas/${reservation.salaId}/disponibilidade`, {
        data: reservation.data,
      });
    }
  }, [reservation, fetchHours]);

  useEffect(() => {
    if (hoursResponse?.data) {
      setAvailableHours(hoursResponse.data.salasDisponivel); // Ajuste conforme a estrutura da sua API
    }
  }, [hoursResponse]);
  console.log(reservation);

  const handlerEdit = () => {
    if (!selectedHourId) {
      alert("Por favor, selecione um novo horário.");
      return;
    }
    updateReservation(
      "PUT",
      `usuarios/${reservation.id}/reservas/${reservation.salaId}`,
      {
        horario_id: selectedHourId,
      },
    );
    close();
  };

  console.log(availableHours);
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] h-full w-full flex items-center justify-center">
      <div className="w-[95%] sm:w-96 shadow-lg rounded-md bg-white space-y-2.5 ">
        <h2 className="p-5 font-bold text-white text-2xl bg-amber-600">
          Editar Reserva
        </h2>
        <div className="p-4 pt-0 space-y-3">
          <p>
            Alterando reserva para a sala{" "}
            <span className="font-bold">{reservation?.sala?.nome}</span> no dia{" "}
            <span className="font-bold">{reservation?.data}</span>.
          </p>
          <h3 className="font-semibold">
            Escolha um dos horários disponíveis:
          </h3>
          <div className="flex flex-col gap-2">
            {availableHours ? (
              availableHours.map((hour) => (
                <div
                  key={hour.id_horario}
                  onClick={() => setSelectedHourId(hour.id_horario)}
                  className={`${
                    selectedHourId === hour.id_horario
                      ? "border-2 border-primary ring-2 ring-primary-light"
                      : "border-2 border-transparent"
                  } p-3 rounded bg-gray-300 text-center cursor-pointer hover:bg-gray-400`}
                >
                  <span>{hour.horario_inicio}</span> -{" "}
                  <span>{hour.horario_fim}</span>
                </div>
              ))
            ) : (
              <p>Carregando horários ou não há horários disponíveis...</p>
            )}
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
              className="p-3 flex text-white items-center gap-2 rounded cursor-pointer bg-amber-600 hover:bg-amber-500"
            >
              <PencilLine size={18} />
              Salvar Mudança
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
