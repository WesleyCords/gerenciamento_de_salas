import AvailRoom from "./MainAvailRoom";
import Reservation from "./MainReservation";
import Wellcome from "./MainWellcome";

const MainContent = ({ screen, onSelectScreen }) => {
  const renderScreen = () => {
    switch (screen) {
      case "dashboard":
        return <Wellcome onSelectScreen={onSelectScreen} />;
      case "disponiveis":
        return <AvailRoom />;
      case "reservas":
        return <Reservation />;
    }
  };
  return (
    <div className="overflow-y-auto max-h-screen flex-1 sm:p-8 p-3">
      {renderScreen()}
    </div>
  );
};

export default MainContent;
