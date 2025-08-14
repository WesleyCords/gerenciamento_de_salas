import Reser from "../Reser"

const CardsReser = ({dados, userID}) => {

    console.log(dados)

    if(!dados) {
        return <div className="text-2xl text-center font-semibold text-color-text">Clique no botão para ver suas reservas.</div>
    }

    if(dados.length === 0 ) {
        return <div className="text-2xl text-center font-semibold uppercase">Usuário ainda não fez nenhuma reserva.</div>
    }
    return dados.map(reserva => ( 
        <Reser key={reserva.id} dados={reserva} userID={userID}/>
    ))
}

export default CardsReser