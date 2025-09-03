import { useState } from "react";
import ConfirmReservationModal from "./Modals/ConfirmeModal";

const Scholders = ({ data, hours, room }) => {
  const [selectedHour, setSelectedHour] = useState(null);

  const formatTime = (timeString) => {
    const [hour, minute] = timeString.split(":");
    let h = parseInt(hour, 10);
    const ampm = h >= 12 ? "PM" : "AM";
    const formattedHour = h.toString().padStart(2, "0");
    return `${formattedHour}:${minute} ${ampm}`;
  };

  return (
    <div className="space-y-3">
      {hours.map((hour) => (
        <>
          <div
            key={hour.id}
            className="bg-gray-200 p-2 flex items-center gap-3"
          >
            <h4 className="flex-1">
              {formatTime(hour.inicio)} - {formatTime(hour.fim)}
            </h4>
            <button
              onClick={() => setSelectedHour(hour)}
              className="bg-primary py-2 px-4 text-white hover:bg-primary-dark rounded cursor-pointer"
            >
              Reservar
            </button>
          </div>
          {selectedHour && (
            <ConfirmReservationModal
              room={room}
              data={data}
              hour={selectedHour}
              close={() => setSelectedHour(null)}
              formatTime={formatTime}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default Scholders;
