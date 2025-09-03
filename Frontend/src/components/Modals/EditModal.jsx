import { PencilLine, ChevronLeft } from "lucide-react";
import { useState } from "react";

const EditModal = ({ close }) => {
  const [isSelect, setIsSelect] = useState(false);

  const handlerEdit = () => {
    alert("Opaa");
    close(false);
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] h-full w-full flex items-center justify-center">
      <div className="w-[95%] sm:w-96 shadow-lg rounded-md bg-white space-y-2.5 ">
        <h2 className="p-5 font-bold text-white text-2xl bg-amber-600">
          Editar Reserva
        </h2>
        <div className="p-4 pt-0 space-y-3">
          <h3 className="font-semibold">
            Escolha um desses horarios disponiveis:
          </h3>
          <div className="flex flex-col gap-2">
            <div
              onClick={() => setIsSelect(!isSelect)}
              className={`${isSelect ? "border-2 border-text" : ""} p-3 rounded bg-gray-300 text-center cursor-pointer hover:bg-gray-400`}
            >
              <span>11:00 AM </span>-<span>12:00 AM</span>
            </div>
            <div
              onClick={() => setIsSelect(!isSelect)}
              className={`${isSelect ? "border-2 border-text" : ""} p-3 rounded bg-gray-300 text-center cursor-pointer hover:bg-gray-400`}
            >
              <span>11:00 AM </span>-<span>12:00 AM</span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-end gap-3 font-[500]">
            <button
              onClick={() => close(false)}
              className="hover:bg-gray-300 flex items-center gap-1 p-3 rounded cursor-pointer"
            >
              <ChevronLeft size={18} />
              Cancelar
            </button>
            <button
              onClick={() => handlerEdit()}
              className="p-3 flex text-white items-center gap-2 rounded cursor-pointer bg-amber-600 hover:bg-amber-500"
            >
              <PencilLine size={18} />
              Salvar Mudança
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
