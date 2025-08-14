import CardsReser from "../Cards/CardsReser"
import api from "../../helper/axios-instance"
import useAxios from "../../hook/use-axios"

const Reservations = () => {

    const {id} = JSON.parse(localStorage.getItem('user'))

    const {fetchData, error, response, loading} = useAxios({
        url: `usuarios/${id}/reservas`,
        method: "GET",
        axiosIntance: api
    })

    const renderContent = () => {
        if (loading) {
          return <p>Carregando suas reservas...</p>
        }
        if (error) {
          return <div className="text-[2rem] text-red-600">{error.response?.data?.message || 'Ocorreu um erro ao buscar suas reservas'}</div>
        }
        return <CardsReser dados={response?.data?.reservations} userID={id}/>
      }

    return (
        <div className="space-y-3">
            <div>
                <button className="p-3 bg-primary hover:bg-primary-light rounded" onClick={() => fetchData()}>
                    Ver reservas
                </button>
            </div>
            {renderContent()}
        </div>
    )
}

export default Reservations