import RoomCard from "../Rooms"

const CardsRomm = ({dados, data}) => {

  if(!dados || dados.length === 0) {
    return <div className="text-2xl text-center">Nenhuma sala disponível encontrada</div>
  }

  return (
      <div className='grid-cols-3 grid gap-4'>
        {dados.map(sala => (
          <RoomCard key={sala.id} sala={sala} data={data}/>
        ))}
      </div>
  )
}

export default CardsRomm