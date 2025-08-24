import {Calendar1} from 'lucide-react'

const CloseReservations = () => {
    return (
      <div className="my-9 bg-white shadow-[0_0_10px_3px_rgba(0,0,0,0.1)] p-6">
        <header className="flex gap-3 items-center">
          <span className="bg-gray-200 p-2 text-primary rounded"><Calendar1 size={25}/></span>
          <h2 className="font-medium text-text text-[1.2rem]">Próximas Reservas</h2>
        </header>
        <main className="mt-6 flex flex-col gap-6">
          <div className="space-y-1">
            <h3 className="text-text font-semibold text-[1rem]">Sala de Reuniões 01</h3>
            <div className="text-text-secundary text-[0.9rem]">
              <span>Hoje, </span>
              <span>14:00 - 15:30</span>
            </div>
          </div>
          <div className="space-y-1">
            <h3 className="text-text font-semibold text-[1rem]">Sala de Reuniões 01</h3>
            <div className="text-text-secundary text-[0.9rem]">
              <span>Hoje, </span>
              <span>14:00 - 15:30</span>
            </div>
          </div>
          <div className="space-y-1">
            <h3 className="text-text font-semibold text-[1rem]">Sala de Reuniões 01</h3>
            <div className="text-text-secundary text-[0.9rem]">
              <span>Hoje, </span>
              <span>14:00 - 15:30</span>
            </div>
          </div>
        </main>
      </div>
    )
}

export default CloseReservations