import { useState } from "react";
import ConfirmReserModal from "./Modals/ConfirmReserModal";

const RoomCard = ({ sala, data }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [clock, setClock] = useState({})

  const handleHorario = horario => {
    setClock(horario)
    setIsOpenModal(true)
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
            <span>{horario.inicio} PM</span> - <span>{horario.fim} PM</span>
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