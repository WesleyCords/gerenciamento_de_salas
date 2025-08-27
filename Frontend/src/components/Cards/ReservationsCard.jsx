import EditModal from "../Modals/EditModal"
import ConfirmDeleteModal from "../Modals/DeleteModal"
import { Clock, House, User, PencilLine, X } from 'lucide-react'
import { useState } from 'react'

const ReservationsCard = () => {
    const [isOpenModalEdit, setIsOpenModalEdit] = useState(false)
    const [isOpenModalDelete, setIsOpenModalDelete] = useState(false)

    return (
        <div className='bg-gray-100 flex flex-col lg:flex-row items-start lg:items-center p-5 gap-3 rounded-[6px]'>
          <span className='p-3 bg-gray-200 text-primary rounded-[8px]'><House/></span>
          <div className='flex-1'>
            <h3 className='text-text font-semibold '>Sala de Reunião 101</h3>
            <div className='flex items-center gap-4 text-[0.9rem]'>
              <span className='text-text-secundary flex items-center gap-1'>
                <Clock size={16}/>
                <span>11:00 AM - 12:00 PM</span>
              </span>
              <span className='text-text-secundary flex items-center gap-1'>
                <User size={16}/>
                <span>8 pessoas</span>
              </span>
            </div>
          </div>
          <div className='flex gap-3 items-center'>
            <button onClick={() => setIsOpenModalEdit(true)} className='text-primary py-2 px-3 bg-green-100 hover:bg-green-200 flex items-center gap-1 rounded cursor-pointer'>
              <PencilLine size={15} />
              <span>Editar</span>
            </button>
            <button onClick={() => setIsOpenModalDelete(true)} className='text-red-500 py-2 px-3 bg-red-100 hover:bg-red-200 flex items-center gap-1 rounded cursor-pointer'>
              <X size={15} />
              <span>Cancelar</span>
            </button>
          </div>
            {isOpenModalEdit && <EditModal close={setIsOpenModalEdit}/>}
            {isOpenModalDelete && <ConfirmDeleteModal close={setIsOpenModalDelete} />}
        </div>
    )
}

export default ReservationsCard