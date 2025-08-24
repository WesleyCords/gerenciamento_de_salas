import { LayoutDashboard, DoorOpen, CalendarCheck } from 'lucide-react'

const Sidebar = ({ onSelectScreen, screenSelect }) => {
  return (
    <aside className="hidden sm:flex sm:w-[30vw] lg:w-[20vw] flex-col items-center bg-primary">
      <div className="mb-6 py-6 text-center text-[1.5rem] font-bold text-white border-b-gray-300 border-b-[0.4px] w-full">
        Painel de Controle
      </div>
      <nav className='w-full'>
        <ul className="space-y-2 text-[#ffffff] font-semibold">
          <li
            onClick={() => onSelectScreen('dashboard')}
            className={`group flex cursor-pointer items-center ${screenSelect === 'dashboard' ? 'border-l-4 bg-primary-light' : 'hover:bg-primary-light'} gap-3 px-6 py-3`}  
          >
            <LayoutDashboard size={20}/>
            <button className="cursor-pointer text-color-text group-hover:text-secundary">
              Dashboard
            </button>
          </li>
          <li
            onClick={() => onSelectScreen('disponiveis')}
            className={`group flex cursor-pointer items-center ${screenSelect === 'disponiveis' ? 'border-l-4 bg-primary-light' : 'hover:bg-primary-light'} gap-3 px-6 py-3`}
          >
            <DoorOpen size={20}/>
            <button className="cursor-pointer text-color-text group-hover:text-secundary">
              Salas disponíveis
            </button>
          </li>
          <li
            onClick={() => onSelectScreen('reservas')}
            className={`group flex cursor-pointer items-center ${screenSelect === 'reservas' ? 'border-l-4 bg-primary-light' : 'hover:bg-primary-light'} gap-3 px-6 py-3`}
          >
            <CalendarCheck size={20}/>
            <button className="cursor-pointer text-color-text group-hover:text-secundary">
              Reservas
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
