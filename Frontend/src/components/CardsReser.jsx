import { useState } from "react"
import EditModal from "./Modals/EditModal"
import ConfirmDeleteModal from "./Modals/ConfirmDeleteModal"

const CardsReser = () => {
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
    const [isOpenEditModal, setIsOpenEditModal] = useState(false)

    const openModalEdit = () => {
        setIsOpenEditModal(true)
        console.log("OXEEEE")
    }

    return (
        <div className="bg-white shadow-2xl p-4 rounded">
            <h2 className="font-bold text-[1.5rem]">Sala 2 - Estudos</h2>
            <div className="flex gap-1.5 items-center mb-1">
                <span className="border-r-1 pr-1.5">
                    2025-08-09
                </span>
                <p className="flex gap-2">
                    <span>13:00 PM</span>
                    -
                    <span>14:00 PM</span>
                </p>
            </div>
            <div className="flex gap-4 border-t-1 border-gray-300 pt-3">
                <div className="flex items-center bg-primary p-2 rounded cursor-pointer text-white gap-2 hover:bg-primary-light" onClick={openModalEdit} >
                    <i className="fa-regular fa-pen-to-square"></i>
                    <button className="cursor-pointer">Editar</button>
                </div>
                <div className="flex items-center bg-red-500 p-2 rounded cursor-pointer text-white gap-2 hover:bg-red-600" onClick={() => setIsOpenDeleteModal(true)}>
                    <i className="fa-regular fa-trash-can"></i>
                    <button className="cursor-pointer">Deletar</button>
                </div>
            </div>
            {isOpenDeleteModal && <ConfirmDeleteModal close={setIsOpenDeleteModal}/>}
            {isOpenEditModal && <EditModal close={setIsOpenEditModal}/>}
        </div>
    )
}

export default CardsReser