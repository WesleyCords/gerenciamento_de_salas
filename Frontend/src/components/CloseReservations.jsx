import {Calendar1} from 'lucide-react'
import NextReservaCard from './Cards/NextReservaCard'

const CloseReservations = () => {
    return (
      <div className="my-9 bg-white shadow-[0_0_10px_3px_rgba(0,0,0,0.1)] p-6">
        <header className="flex gap-3 items-center">
          <span className="bg-gray-200 p-2 text-primary rounded"><Calendar1 size={25}/></span>
          <h2 className="font-medium text-text text-[1.2rem]">Próximas Reservas</h2>
        </header>
        <main className="mt-6 flex flex-col gap-6">
          <NextReservaCard />
          <NextReservaCard />
          <NextReservaCard />
        </main>
      </div>
    )
}

export default CloseReservations