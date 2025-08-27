import { IMaskInput } from 'react-imask'
import { Calendar, User } from 'lucide-react'
import RoomAvailCard from '../Cards/RoomAvailCard'

const AvailRoom = () => {

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
        <RoomAvailCard />
      </div>
    </div>
  )
}

export default AvailRoom
