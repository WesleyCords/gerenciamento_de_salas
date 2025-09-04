import { IMaskInput } from "react-imask";
import { Calendar, User } from "lucide-react";
import RoomAvailCard from "../Cards/RoomAvailCard";
import { useState, useCallback } from "react";
import useAxios from "../../hook/use-axios";
import api from "../../helper/axios-instance";

const AvailRoom = () => {
  const { fetchData, response, error, loading } = useAxios(api);
  const dateToday = useCallback(() => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }, []);

  const [date, setDate] = useState(dateToday());
  const [people, setPeople] = useState(0);

  const searchReservation = () => {
    if (date === "" || people <= 0) {
      return alert("Por favor, preencha todos os campos corretamente.");
    }
    if (date === dateToday()) {
      fetchData("GET", "salas", { data: date, capacidade: people });
      return;
    }
    const dataFormatted = date.replaceAll("/", "-");
    fetchData("GET", "salas", { data: dataFormatted, capacidade: people });
  };

  const renderContent = () => {
    if (!response || response?.data?.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center gap-5 mt-20">
          <p className=" text-lg font-semibold text-text">
            Nenhuma sala disponível para os critérios selecionados.
          </p>
          <button
            onClick={() => alert("Só inserir dados jovem! S2")}
            className="py-2 px-5 bg-primary cursor-pointer rounded-md text-lg font-semibold hover:bg-primary-dark text-principal"
          >
            Nova Reserva
          </button>
        </div>
      );
    }
    if (loading) {
      return <p>Carregando...</p>;
    }
    if (error) {
      return (
        <p className="text-red-400 font-bold">
          Houve um erro ao carregar os dados.
        </p>
      );
    }
    return (
      <div className="block space-y-3 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <RoomAvailCard data={date} response={response} />
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <h1 className="font-bold text-2xl text-text">Salas Disponíveis</h1>
      <div className="text-text-secundary flex-col lg:flex-row flex gap-3 lg:pr-12 p-4 rounded shadow-[0_0_5px_4px_rgba(0,0,0,0.1)]">
        <div className="bg-gray-100 flex-1 flex items-center p-3 gap-3 rounded">
          <Calendar />
          <IMaskInput
            mask="0000/00/00"
            placeholder="Selecione uma data"
            className="outline-0 text-text"
            onChange={(e) => setDate(e.target.value)}
            value={date ? date : ""}
          />
        </div>
        <div className="bg-gray-100 flex-1 flex items-center p-3 gap-3 rounded">
          <User />
          <input
            className="no-spinners outline-0 text-text"
            type="number"
            placeholder="Numero de pessoas"
            onChange={(e) => setPeople(e.target.value)}
            value={people}
          />
        </div>
        <button
          onClick={searchReservation}
          className="bg-primary font-semibold py-2 px-5 rounded text-white cursor-pointer hover:bg-primary-dark"
        >
          Buscar
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

export default AvailRoom;
