import AvailRoom from './MainAvailRoom'
import Reservation from './MainReservation'
import Wellcome from './MainWellcome'

const MainContent = ({ screen }) => {
  const renderScreen = () => {
    switch (screen) {
      case 'inicial':
        return <Wellcome />
      case 'disponiveis':
        return <AvailRoom />
      case 'reservas':
        return <Reservation />
    }
  }
  return <div className="flex-1 overflow-y-auto p-8">{renderScreen()}</div>
}

export default MainContent
