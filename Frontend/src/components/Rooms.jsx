import { useState } from "react";
import ConfirmReserModal from "./Modals/ConfirmReserModal";

const RoomCard = ({ sala, data }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [clock, setClock] = useState({})

  const handleHorario = horario => {
    setClock(horario)
    setIsOpenModal(true)
  }

const formatTime = timeString => {
  const [hour, minute, second] = timeString.split(':');
  console.log(second)
  let h = parseInt(hour, 10);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const formattedHour = h.toString().padStart(2, '0');
  return `${formattedHour}:${minute} ${ampm}`;
}

  return (
    <div key={sala.id} className='bg-white p-3 rounded-md space-y-2'>
      <h2 className='font-bold'>{sala.nome}</h2>
      <p className='font-light text-[0.9rem]'>
        Capacidade: {sala.capacidade}
      </p>
      {sala.horariosLivres.map(horario => (
        <div key={horario.id} className='flex items-center gap-4 bg-gray-100 p-2 rounded'>
          <h4 className='text-[0.9rem]'>
            <span>{formatTime(horario.inicio)} </span> - <span>{formatTime(horario.fim)} </span>
          </h4>
          <button
            className='bg-primary text-white py-2 px-5 rounded cursor-pointer hover:bg-primary-light'
            onClick={() => handleHorario(horario)}
          >
            Reservar
          </button>
        </div>
      ))}
      {isOpenModal && <ConfirmReserModal close={setIsOpenModal} dados={sala} horario={clock} data={data}/>}
    </div>
  );
};

export default RoomCard;