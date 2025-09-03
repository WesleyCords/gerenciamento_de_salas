import EditModal from "../Modals/EditModal";
import ConfirmDeleteModal from "../Modals/DeleteModal";
import { Clock, House, User, PencilLine, X } from "lucide-react";
import { useEffect, useState } from "react";
import useAxios from "../../hook/use-axios";
import api from "../../helper/axios-instance";

const ReservationsCard = () => {
  const [reservationToEdit, setReservationToEdit] = useState(null);
  const [reservationToDelete, setReservationToDelete] = useState(null);

  const { response, cancel, fetchData, loading } = useAxios(api);
  const { id } = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchData("GET", `usuarios/${id}/reservas`);

    return () => cancel();
  }, [cancel, fetchData, id]);

  const formatTime = (timeString) => {
    const [hour, minute] = timeString.split(":");
    let h = parseInt(hour, 10);
    const ampm = h >= 12 ? "PM" : "AM";
    const formattedHour = h.toString().padStart(2, "0");
    return `${formattedHour}:${minute} ${ampm}`;
  };

  const reservations = response?.data?.reservations || [];

  if (loading) {
    return <p>Carregando...</p>;
  }
  return (
    <>
      {reservations.map((res) => (
        <div className="bg-gray-100 flex flex-col lg:flex-row items-start lg:items-center p-5 gap-3 rounded-[6px]">
          <span className="p-3 bg-gray-200 text-primary rounded-[8px]">
            <House />
          </span>
          <div className="flex-1">
            <h3 className="text-text font-semibold ">{res.sala.nome}</h3>
            <div className="flex items-center gap-4 text-[0.9rem]">
              <span className="text-text-secundary flex items-center gap-1">
                <Clock size={16} />
                <span>
                  {formatTime(res.horario.inicio)} {formatTime(res.horario.fim)}
                </span>
              </span>
              <span className="text-text-secundary flex items-center gap-1">
                <User size={16} />
                <span>8 pessoas</span>
              </span>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <button
              onClick={() => setReservationToEdit(res)}
              className="text-primary py-2 px-3 bg-green-100 hover:bg-green-200 flex items-center gap-1 rounded cursor-pointer"
            >
              <PencilLine size={15} />
              <span>Editar</span>
            </button>
            <button
              onClick={() => setReservationToDelete(res)}
              className="text-red-500 py-2 px-3 bg-red-100 hover:bg-red-200 flex items-center gap-1 rounded cursor-pointer"
            >
              <X size={15} />
              <span>Cancelar</span>
            </button>
          </div>
        </div>
      ))}
      {reservationToEdit && (
        <EditModal
          reservation={reservationToEdit}
          close={() => setReservationToEdit(null)}
        />
      )}
      {reservationToDelete && (
        <ConfirmDeleteModal
          reservation={reservationToDelete}
          close={() => setReservationToDelete(null)}
        />
      )}
    </>
  );
};

export default ReservationsCard;
