import { useState } from "react"
import ConfirmReservationModal from "./Modals/ConfirmeModal"

const Scholders = () => {
    const [isOpenModalReserva, setIsOpenModalReserva] = useState(false)
    // const formatTime = timeString => {
    //     const [hour, minute, second] = timeString.split(':');
    //     console.log(second)
    //     let h = parseInt(hour, 10);
    //     const ampm = h >= 12 ? 'PM' : 'AM';
    //     const formattedHour = h.toString().padStart(2, '0');
    //     return `${formattedHour}:${minute} ${ampm}`;
    // }

    return (
        <div>
            <div className='bg-gray-200 p-2 flex items-center gap-3'>
                <h4 className='flex-1'>
                    <span>11:00 AM </span>
                    - 
                    <span> 12:00 AM</span>
                </h4>
                <button onClick={() => setIsOpenModalReserva(true)} className='bg-primary py-2 px-4 text-white hover:bg-primary-dark rounded cursor-pointer'>Reservar</button>
            </div>
            {isOpenModalReserva && <ConfirmReservationModal close={setIsOpenModalReserva} />}
        </div>
    )
}

export default Scholders