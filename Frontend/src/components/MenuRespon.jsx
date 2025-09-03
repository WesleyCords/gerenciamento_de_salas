import {
  Menu,
  X,
  LayoutDashboard,
  DoorOpen,
  CalendarCheck,
} from "lucide-react";
import { useState } from "react";

const MenuRespo = ({ onSelectScreen, screenSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (screen) => {
    onSelectScreen(screen);
    setIsOpen(false);
  };

  return (
    <div className="w-full sm:hidden">
      <div className="bg-primary w-full h-[50px] flex px-4 gap-4 items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? (
            <X className="text-principal" />
          ) : (
            <Menu className="text-principal" />
          )}
        </button>
        <h1 className="text-principal">Painel de Controle</h1>
      </div>
      <div
        className={`
                  overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out
                  ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
              `}
      >
        <nav className="w-full border-b border-gray-200">
          <ul className="font-semibold">
            <li
              onClick={() => handleSelect("dashboard")}
              className={`flex cursor-pointer items-center gap-3 px-6 py-3 transition-colors
                            ${screenSelect === "dashboard" ? "border-l-4 border-primary bg-gray-100 text-primary" : "hover:bg-gray-100 text-gray-700"}`}
            >
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </li>
            <li
              onClick={() => handleSelect("disponiveis")}
              className={`flex cursor-pointer items-center gap-3 px-6 py-3 transition-colors
                            ${screenSelect === "disponiveis" ? "border-l-4 border-primary bg-gray-100 text-primary" : "hover:bg-gray-100 text-gray-700"}`}
            >
              <DoorOpen size={20} />
              <span>Salas disponíveis</span>
            </li>
            <li
              onClick={() => handleSelect("reservas")}
              className={`flex cursor-pointer items-center gap-3 px-6 py-3 transition-colors
                            ${screenSelect === "reservas" ? "border-l-4 border-primary bg-gray-100 text-primary" : "hover:bg-gray-100 text-gray-700"}`}
            >
              <CalendarCheck size={20} />
              <span>Reservas</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MenuRespo;
