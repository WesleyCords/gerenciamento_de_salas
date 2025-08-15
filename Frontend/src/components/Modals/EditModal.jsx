import api from "../../helper/axios-instance"
import Scholders from "../Scholders"
import useAxios from "../../hook/use-axios"
import { useState } from "react"

const EditModal = ({close, userId, data, salaId, reservaId}) => {
    const [idHorario, setIdHorario] = useState('')

    const {fetchData} = useAxios({
        method: "PUT",
        url: `usuarios/${userId}/reservas/${reservaId}`,
        axiosIntance: api
    })

    const changeReservation = () => {
        alert("reserva atualizada!")
        fetchData({horario_id: idHorario})
        close()
    }

    return (
        <div className="fixed inset-0 bg-gray-400 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="relative p-5 w-96 shadow-lg rounded-md bg-white text-center space-y-2.5 ">
                <h2 className="text-left font-bold text-2xl">Editar Reserva</h2>
                <h3 className="font-semibold">Veja os horarios vagos:</h3>
                <div className="flex flex-col gap-2">
                    <Scholders data={data} evento={setIdHorario} salaId={salaId} selectId={idHorario}/>
                </div>
                <div className="mt-4 flex items-center justify-end gap-3 font-[500]">
                    <button className="hover:bg-gray-300 p-3 rounded cursor-pointer"  onClick={() => close(false)}>
                        Cancelar
                    </button>
                    <button className="p-3 rounded cursor-pointer bg-primary hover:bg-primary-light" disabled={!idHorario} onClick={() => changeReservation()}>
                        Salvar Mudança
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditModal