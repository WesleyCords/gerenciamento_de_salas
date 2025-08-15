import useAxios from "../hook/use-axios"
import api from "../helper/axios-instance"

const Scholders = ({salaId, data, evento, selectId}) => {
    const {fetchData, response} = useAxios({
        method: "GET",
        url: `salas/${salaId}/disponibilidade`,
        axiosIntance: api
    })

    const formatTime = timeString => {
        const [hour, minute, second] = timeString.split(':');
        console.log(second)
        let h = parseInt(hour, 10);
        const ampm = h >= 12 ? 'PM' : 'AM';
        const formattedHour = h.toString().padStart(2, '0');
        return `${formattedHour}:${minute} ${ampm}`;
    }

    const horarios = response?.data?.salasDisponivel

    if(!horarios) {
        return (
            <div className="my-4">
                <button className="bg-primary hover:bg-primary-light p-3 rounded cursor-pointer" onClick={() => fetchData({data})}>Horarios</button>
            </div>
        )
    }

    if(horarios.length === 0) {
        return (
            <div className="my-4">
                <h2 className="font-semibold text-red-500">Não tem horarios para essa sala nessa data.</h2>
            </div>
        )
    }
    if(horarios) {
        return (
            horarios.map(horario => (
                <div key={horario.id_horario} className={`bg-gray-300 p-2 cursor-pointer hover:bg-gray-400 ${horario.id_horario === selectId ? 'border-2 border-primary-light' : ''}`} onClick={() => {
                    evento(horario.id_horario);
                }}>
                    <p>
                        <span>{formatTime(horario.horario_inicio)}</span>
                        -
                        <span>{formatTime(horario.horario_fim)}</span>
                    </p>
                </div>
            ))
        )
    }
}

export default Scholders