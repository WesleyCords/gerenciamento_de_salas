const EditModal = ({close}) => {

    const changeReservation = () => {
        alert("reserva atualizada!")
        close()
    }

    return (
        <div className="fixed inset-0 bg-gray-400 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="relative p-5 w-96 shadow-lg rounded-md bg-white text-center space-y-2.5 ">
                <h2 className="text-left font-bold text-2xl">Editar Reserva</h2>
                <h3 className="font-semibold">Escolha um novo horário:</h3>
                <div className="flex flex-col gap-2">
                    <div className="bg-gray-300 p-2 cursor-pointer hover:bg-gray-400">
                        <p>
                            <span>14:00 PM </span>
                            -
                            <span> 15:00 PM </span>
                        </p>
                    </div>
                    <div className="bg-gray-300 p-2 cursor-pointer hover:bg-gray-400">
                        <p>
                            <span>14:00 PM </span>
                            -
                            <span> 15:00 PM </span>
                        </p>
                    </div>
                </div>
                <div className="mt-4 flex items-center justify-end gap-3 font-[500]">
                    <button className="hover:bg-gray-300 p-3 rounded cursor-pointer" onClick={() => close(false)}>
                        Cancelar
                    </button>
                    <button className="p-3 rounded cursor-pointer bg-primary hover:bg-primary-light" onClick={changeReservation}>
                        Salvar Mudanças
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditModal