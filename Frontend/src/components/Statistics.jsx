import {DoorOpen,Search,CalendarCheck, Plus,ChartColumnStacked} from 'lucide-react'

const Statistics = () => {
    return (
      <div className="w-full flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-3">
        <div className='bg-white duration-150 hover:shadow-[0_0_10px_10px_rgba(0,255,0,0.1)] hover:-translate-y-1 shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded p-6 flex flex-col gap-4'>
          <header className='flex gap-3 items-center'>
            <span className='bg-gray-200 p-2 text-primary rounded'><DoorOpen size={25}/></span>
            <h2 className='font-medium text-[1.2rem] text-text'>Salas Disponíveis</h2>
          </header>
          <span className='font-extrabold text-4xl -mb-0.5'>5</span>
          <p className='text-text-secundary'>Salas disponíveis para hoje</p>
          <footer>
            <button className='cursor-pointer hover:bg-primary-dark flex gap-2 items-center py-2 px-4 text-white bg-primary rounded'>
              <Search size={15}/>
              Ver todas
            </button>
          </footer>
        </div>
        <div className='bg-white duration-150 hover:shadow-[0_0_10px_5px_rgba(0,255,0,0.1)] hover:-translate-y-1 shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded p-6 flex flex-col gap-4'>
          <header className='flex gap-3 items-center'>
            <span className='bg-gray-200 p-2 text-primary rounded'><CalendarCheck size={25}/></span>
            <h2 className='font-medium text-[1.2rem] text-text'>Suas Reservas</h2>
          </header>
          <span className='font-extrabold text-4xl -mb-0.5'>5</span>
          <p className='text-text-secundary'>Reservas agendadas esta semana</p>
          <footer>
            <button className='cursor-pointer hover:bg-primary-dark flex gap-2 items-center py-2 px-4 text-white bg-primary rounded'>
              <Plus size={15}/>
              Nova Reserva
            </button>
          </footer>
        </div>
        <div className='bg-white duration-150 hover:shadow-[0_0_10px_10px_rgba(0,255,0,0.1)] hover:-translate-y-1 shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded p-6 flex flex-col gap-4'>
          <header className='flex gap-3 items-center'>
            <span className='bg-gray-200 p-2 text-primary rounded'><DoorOpen size={25}/></span>
            <h2 className='font-medium text-[1.2rem] text-text'>Horas Utilizadas</h2>
          </header>
          <span className='font-extrabold text-4xl -mb-0.5'>12h</span>
          <p className='text-text-secundary'>Total de horas reservadas este mês</p>
          <footer>
            <button className='cursor-pointer hover:bg-primary-dark flex gap-2 items-center py-2 px-4 text-white bg-primary rounded'>
              <ChartColumnStacked size={15}/>
              Ver relatório
            </button>
          </footer>
        </div>
      </div>
    )
}

export default Statistics