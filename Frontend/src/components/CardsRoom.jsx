
import { useState } from "react"
import ConfirmReserModal from "./Modals/ConfirmReserModal"

const CardsRomm = ({data, capacity}) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const dados2 = {
    horarios: {
      inicio: '15:00',
      fim: '16:00'
    },
    sala: "Sala de Estudos",
    data
  }

    return (
        <div className='grid-cols-3 grid gap-4'>
          <div className='bg-white p-3 rounded-md space-y-2'>
            <h2 className='font-bold'>Sala 1 - Reuniões</h2>
            <p className='font-light text-[0.9rem]'>Capacidade: <span>{capacity}</span></p>
            <div className='flex items-center gap-4 bg-gray-100 p-2 rounded'>
              <h4 className='text-[0.9rem]'><span>13:00 PM</span> - <span>14:00 PM</span></h4>
              <button className='bg-primary text-white py-2 px-5 rounded cursor-pointer hover:bg-primary-light' onClick={() => setIsOpenModal(true)} >Reservar</button>
            </div>
            <div className='flex items-center gap-4 bg-gray-100 p-2 rounded'>
              <h4 className='text-[0.9rem]'><span>13:00 PM</span> - <span>14:00 PM</span></h4>
              <button className='bg-primary text-white py-2 px-5 rounded cursor-pointer hover:bg-primary-light' onClick={() => setIsOpenModal(true)} >Reservar</button>
            </div>
          </div>
          {
            isOpenModal && <ConfirmReserModal close={setIsOpenModal} dados={dados2} />
          }
        </div>
    )
}

export default CardsRomm