import api from "../../helper/axios-instance"
import useAxios from "../../hook/use-axios"

const ConfirmDeleteModal = ({close, userId, reservaId }) => {

    const {fetchData, loading} = useAxios({
        url: `usuarios/${userId}/reservas/${reservaId}`,
        method: "DELETE",
        axiosIntance: api
    })

    const handleDelete = () => {
        fetchData()
        alert("Reserva deletada com sucesso!")
        close(false)
    }

    return (
        <div className="fixed inset-0 bg-gray-400 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="relative p-5 w-96 shadow-lg rounded-md bg-white text-center space-y-2.5 ">
                <i class="fa-regular fa-trash-can bg-red-500 rounded-full p-3 text-[2rem] text-white"></i>
                <h2 className="font-bold text-2xl">Confirme Delete</h2>
                <p className="text-[0.8rem]">Tem certeza de que deseja excluir esta reserva? Esta ação é permanente e não pode ser desfeita.</p>
                <div className="flex flex-col gap-3">
                    <button className="bg-red-600 p-3 rounded text-white cursor-pointer hover:bg-red-800" onClick={() => handleDelete()}>
                        {loading ? "Deletando..." : "Confirme Delete"}
                    </button>
                    <button className="p-3 rounded cursor-pointer hover:bg-gray-400" onClick={() => close(false)}>
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmDeleteModal