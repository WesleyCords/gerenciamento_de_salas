import ReservationsCard from "../Cards/ReservationsCard";

const Reservations = () => {
  return (
    <div className="space-y-7">
      <h1 className="font-bold text-text text-2xl">Minhas Reservas</h1>
      <div className="space-y-3">
        <ReservationsCard />
      </div>
    </div>
  );
};

export default Reservations;
