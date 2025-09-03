import RoomCardToday from "./Cards/RoomCardToday";
import ReservaCardFull from "./Cards/ReservaCardFull";
import ScholderCardFull from "./Cards/ScholderCardFull";

const Statistics = ({ onSelectScreen }) => {
  return (
    <div className="w-full flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-3">
      <RoomCardToday onSelectScreen={onSelectScreen} />
      <ReservaCardFull onSelectScreen={onSelectScreen} />
      <ScholderCardFull />
    </div>
  );
};

export default Statistics;
