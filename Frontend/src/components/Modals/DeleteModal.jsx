import { Trash, ChevronLeft } from "lucide-react";

const ConfirmeDeleteModal = ({ close }) => {
  const handlerEdit = () => {
    alert("Opaa");
    close(false);
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] h-full w-full flex items-center justify-center">
      <div className="max-w-[95%] shadow-lg bg-white space-y-2.5 ">
        <h2 className="p-5 font-bold text-white text-2xl bg-red-500">
          Confimar Cancelamento
        </h2>
        <div className="p-4 pt-0 space-y-3">
          <h3 className="font-semibold">
            Tem certeza que deseja cancelar esta reserva?
          </h3>
          <div className="bg-gray-300 p-3 rounded space-y-2">
            <div className="flex items-center justify-between">
              <span>Data:</span>
              <span className="font-semibold">2025/08/25</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Horário:</span>
              <span className="font-semibold">11:00 AM - 12:00 AM</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Sala:</span>
              <span className="font-semibold">Sala de Reunião 101</span>
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
              className="p-3 flex text-white items-center gap-1 rounded cursor-pointer bg-red-500 hover:bg-red-600"
            >
              <Trash size={18} />
              Confirmar cancelamento
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmeDeleteModal;
