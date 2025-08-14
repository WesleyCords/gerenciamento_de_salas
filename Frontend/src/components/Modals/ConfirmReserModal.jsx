import api from "../../helper/axios-instance"
import useAxios from "../../hook/use-axios"

const ConfirmReserModal = ({close, dados, data, horario}) => {
    const {id} = JSON.parse(localStorage.getItem("user"))
    const salaID = dados.id
    const horarioID = horario.id

    const {fetchData, error} = useAxios({
        method: "POST",
        url: `usuarios/${id}/reservas`,
        axiosIntance: api
    })

    const payload = {
        data,
        horario_id: horarioID,
        sala_id: salaID
    }
    
    const testeReservar = () => {
        try {
            console.log(payload)
            fetchData(payload)
            close(false)
            console.log("opa")
        }catch(err) {
            console.log("Deu erro: ",err)
        }
    }

    return (
        <div className="fixed inset-0 bg-gray-400 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="relative p-5 w-96 shadow-lg rounded-md bg-white text-center space-y-6">
                <h2 className="font-bold text-center text-2xl">Detalhes da sua reserva</h2>
                <div className="flex flex-col gap-2 text-white">
                    <div className="flex justify-between items-center bg-gray-400 rounded p-2 font-semibold">
                        <h3>Sala:</h3>
                        <span>{dados.nome}</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-400 rounded p-2 font-semibold">
                        <h3>Data:</h3>
                        <span>{data}</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-400 rounded p-2 font-semibold">
                        <h3>Horário:</h3>
                        <span>{horario.inicio} - {horario.fim}</span>
                    </div>
                </div>
                {error?.response?.data?.message}
                <div className="flex justify-end gap-2 font-semibold">
                    <button className="hover:bg-gray-300 p-3 rounded cursor-pointer" onClick={() => close(false)}>Cancelar</button>
                    <button className="bg-primary p-3 rounded cursor-pointer hover:bg-primary-light" onClick={testeReservar}>Reservar</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmReserModal