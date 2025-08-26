import { IMaskInput } from 'react-imask'
import { Calendar, User } from 'lucide-react'
import { useState } from 'react'
import ConfirmReservationModal from '../Modals/ConfirmReserModal'

const AvailRoom = () => {
  const [isOpenModalReserva, setIsOpenModalReserva] = useState(false)

  return (
    <div className='space-y-6'>
      <h1 className='font-bold text-2xl text-text'>Salas Disponíveis</h1>
      <div className='text-text-secundary flex-col lg:flex-row flex gap-3 lg:pr-12 p-4 rounded shadow-[0_0_5px_4px_rgba(0,0,0,0.1)]'> 
        <div className='bg-gray-100 flex-1 flex items-center p-3 gap-3 rounded'>
          <Calendar />
          <IMaskInput 
          mask='2025/08/25'
          placeholder='Selecione uma data'
          className='outline-0 text-text'
          /> 
        </div>
        <div className='bg-gray-100 flex-1 flex items-center p-3 gap-3 rounded'>
          <User />
          <input className='no-spinners outline-0 text-text' type="number" placeholder='Numero de pessoas'/>
        </div>
        <button className='bg-primary font-semibold py-2 px-5 rounded text-white cursor-pointer hover:bg-primary-dark'>Buscar</button>
      </div>
      <div className='block space-y-3 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>
        <div className='bg-gray-100 p-4'>
          <h2 className='font-semibold text-text text-[1rem]'>Sala de Reunião 101</h2>
          <div className='text-text-secundary flex items-center gap-3'>
            <User size={20} />
            <span>8 pessoas</span>
          </div>
          <div className='border-t-[1px] pt-4 space-y-3 mt-5'>
            <div className='bg-gray-200 p-2 flex items-center gap-3'>
              <h4 className='flex-1'>
                <span>11:00 AM </span>
                - 
                <span> 12:00 AM</span>
              </h4>
              <button onClick={() => setIsOpenModalReserva(true)} className='bg-primary py-2 px-4 text-white hover:bg-primary-dark rounded cursor-pointer'>Reservar</button>
            </div>
            <div className='bg-gray-200 p-2 flex items-center gap-3'>
              <h4 className='flex-1'>
                <span>11:00 AM </span>
                - 
                <span> 12:00 AM</span>
              </h4>
              <button className='bg-primary py-2 px-4 text-white hover:bg-primary-dark rounded cursor-pointer'>Reservar</button>
            </div>
          </div>
        </div>
      </div>
      {isOpenModalReserva && <ConfirmReservationModal close={setIsOpenModalReserva} />}
    </div>
  )
}

export default AvailRoom
