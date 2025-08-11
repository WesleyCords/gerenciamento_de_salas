const ConfirmReserModal = ({close, dados}) => {

    const {horarios, sala, data} = dados
    
    const testeReservar = () => {
        alert("TESTE: Reserva feita com sucesso!")
        close(false)
    }

    return (
        <div className="fixed inset-0 bg-gray-400 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="relative p-5 w-96 shadow-lg rounded-md bg-white text-center space-y-6">
                <h2 className="font-bold text-center text-2xl">Detalhes da sua reserva</h2>
                <div className="flex flex-col gap-2 text-white">
                    <div className="flex justify-between items-center bg-gray-400 rounded p-2 font-semibold">
                        <h3>Sala:</h3>
                        <span>{sala}</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-400 rounded p-2 font-semibold">
                        <h3>Data:</h3>
                        <span>{data}</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-400 rounded p-2 font-semibold">
                        <h3>Horário:</h3>
                        <span>{horarios.inicio} - {horarios.fim}</span>
                    </div>
                </div>
                <div className="flex justify-end gap-2 font-semibold">
                    <button className="hover:bg-gray-300 p-3 rounded cursor-pointer" onClick={() => close(false)}>Cancelar</button>
                    <button className="bg-primary p-3 rounded cursor-pointer hover:bg-primary-light" onClick={testeReservar}>Reservar</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmReserModal