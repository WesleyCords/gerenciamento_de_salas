const Sidebar = ({ onSelectScreen }) => {
  return (
    <aside className="flex w-[20vw] flex-col items-center bg-primary p-3">
      <div className="mb-8 text-[1.5rem] font-bold text-color-text">
        Painel de Controle
      </div>
      <nav>
        <ul className="space-y-2">
          <li
            onClick={() => onSelectScreen('disponiveis')}
            className="group flex cursor-pointer items-center gap-3 rounded-[10px] bg-secundary px-6 py-3 shadow-2xl hover:bg-color-text"
          >
            <i className="fa-solid fa-magnifying-glass cursor-pointer group-hover:text-secundary"></i>
            <button className="cursor-pointer text-color-text group-hover:text-secundary">
              Ver salas disponíveis
            </button>
          </li>
          <li
            onClick={() => onSelectScreen('reservas')}
            className="group flex cursor-pointer items-center gap-3 rounded-[10px] bg-secundary px-6 py-3 shadow-2xl hover:bg-color-text"
          >
            <i className="fa-solid fa-bookmark cursor-pointer group-hover:text-secundary"></i>
            <button className="cursor-pointer text-color-text group-hover:text-secundary">
              Ver suas reservas
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
