import CloseReservations from "../CloseReservations";
import Statistics from "../Statistics";

const Wellcome = ({ onSelectScreen }) => {
  const primaryName = () => {
    const name = JSON.parse(localStorage.getItem("user")).nome.split(" ")[0];
    const primaryLetter = name[0].toUpperCase();
    const restName = name.slice(1);

    return primaryLetter + restName;
  };

  return (
    <div>
      <div className="block py-2 border-l-[6px] bg-[rgba(0,200,0,0.1)] border-primary rounded-[6px] px-6">
        <h1 className="font-extrabold text-text text-[2rem] tracking-wider">
          Olá, {primaryName()}!
        </h1>
        <p className="text-text-secundary hidden sm:block">
          Bem-vindo ao sistema de reservas. Aqui está o resumo das suas
          atividades.
        </p>
        <p className="text-text-secundary block sm:hidden">
          Bem-vindo ao sistema de reservas.
        </p>
      </div>
      <Statistics onSelectScreen={onSelectScreen} />
      <CloseReservations />
    </div>
  );
};

export default Wellcome;
