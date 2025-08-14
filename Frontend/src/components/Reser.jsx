import { useState } from "react";
import ConfirmDeleteModal from "./Modals/ConfirmDeleteModal";
import EditModal from "./Modals/EditModal";

const Reser = ({dados, userID}) => {
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
    const [isOpenEditModal, setIsOpenEditModal] = useState(false)

    const {data, sala, horario, id, horarioId, salaId, usuarioId} = dados

    const openModalEdit = () => {
        setIsOpenEditModal(true)
    }

    return (
        <div className="bg-white shadow-2xl p-4 rounded">
            <h2 className="font-bold text-[1.5rem]">{sala.nome}</h2>
            <div className="flex gap-1.5 items-center mb-1">
                <span className="border-r-1 pr-1.5">
                    {data}
                </span>
                <p className="flex gap-2">
                    <span>{horario.inicio}</span>
                    -
                    <span>{horario.fim}</span>
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
            {isOpenDeleteModal && <ConfirmDeleteModal userId={userID} reservaId={id} close={setIsOpenDeleteModal}/>}
            {isOpenEditModal && <EditModal horarioId={horarioId} reservaId={id} userId={usuarioId} close={setIsOpenEditModal} salaId={salaId} data={data}/>}
        </div>
    );
};

export default Reser;