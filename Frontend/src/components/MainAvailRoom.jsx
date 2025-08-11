import { IMaskInput } from 'react-imask'
import CardsRomm from './CardsRoom'
import { useState } from 'react'

const AvailRoom = () => {
  
  const [data, setData] = useState('');
  const [people, setPeople] = useState('')

  const handleRooms = () => {
    if(!data || !people) {
      return alert("Insira dados para pesquisa.")
    }
    alert("Deu certo chefinho!: " + data + ' / ' + people )
  }

  return (
    <main className='flex-1 overflow-y-auto'>
      <header className="justify-center bg-white py-5 rounded-md shadow mb-8 flex gap-16 items-center">
        <div>
          <label htmlFor='data'>Data</label>
          <div className="flex items-center rounded-md border-2 border-gray-300 text-gray-700 gap-2 px-1 group focus-within:border-primary">
            <i class="fa-regular fa-calendar text-[1rem]"></i>
            <IMaskInput
              className="p-1.5 outline-0"
              mask="0000-00-00"
              type="text"
              id='data'
              placeholder="2025-08-09"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor='capacidade'>Números de Pessoas</label>
          <div className="flex items-center rounded-md border-2 border-gray-300 text-gray-700 gap-2 px-1 group focus-within:border-primary">
            <i class="fa-solid fa-users text-[1rem] "></i>
            <input id='capacidade' type="number" className="outline-0 no-spinners p-1.5" placeholder='e.g., 10' onChange={(e) => setPeople(e.target.value)} value={people}/>
          </div>
        </div>
        <button className='h-[80%] bg-primary text-white py-2 px-5 rounded cursor-pointer hover:bg-primary-light' onClick={handleRooms}>Encontrar Salas</button>
      </header>
      <section >
        <h2 className='font-bold text-2xl mb-5'>Salas Disponíveis</h2>
        <CardsRomm data={data} capacity={people}/>
      </section>
    </main>
  )
}

export default AvailRoom
