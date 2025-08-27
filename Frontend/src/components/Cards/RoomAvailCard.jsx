import { User } from "lucide-react"
import Scholders from "../Scholders"

const RoomAvailCard = () => {

    return (
        <>
            <div className='bg-gray-100 p-4'>
            <h2 className='font-semibold text-text text-[1rem]'>Sala de Reunião 101</h2>
            <div className='text-text-secundary flex items-center gap-3'>
                <User size={20} />
                <span>8 pessoas</span>
            </div>
            <div className='border-t-[1px] pt-4 space-y-3 mt-5'>
                <Scholders />
                <Scholders />
                <Scholders />
            </div>
            </div>
        </>
    )
}

export default RoomAvailCard