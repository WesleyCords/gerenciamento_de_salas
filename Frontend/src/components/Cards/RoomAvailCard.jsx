import { User } from "lucide-react";
import Scholders from "../Scholders";

const RoomAvailCard = ({ data, response }) => {
  const reservation = response?.data?.salasEspecifica || [];
  return (
    <>
      {reservation.map((res) => (
        <div className="bg-gray-100 p-4" key={res.id}>
          <h2 className="font-semibold text-text text-[1rem]">{res.nome}</h2>
          <div className="text-text-secundary flex items-center gap-3">
            <User size={20} />
            <span>{res.capacidade} pessoas</span>
          </div>
          <div className="mt-3 font-semibold">
            <h3>Descrição:</h3>
            <h3 className="text-md text-text font-medium">{res.descricao}</h3>
          </div>
          <div className="border-t-[1px] pt-4 space-y-3 mt-5">
            <Scholders data={data} room={res} hours={res.horariosLivres} />
          </div>
        </div>
      ))}
    </>
  );
};
export default RoomAvailCard;
