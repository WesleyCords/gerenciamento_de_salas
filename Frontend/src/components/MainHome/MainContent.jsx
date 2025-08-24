import AvailRoom from './MainAvailRoom'
import Reservation from './MainReservation'
import Wellcome from './MainWellcome'

const MainContent = ({ screen, user }) => {
  const renderScreen = () => {
    switch (screen) {
      case 'dashboard':
        return <Wellcome user={user} />
      case 'disponiveis':
        return <AvailRoom user={user}/>
      case 'reservas':
        return <Reservation />
    }
  }
  return <div className="overflow-y-auto max-h-screen flex-1 sm:p-8 p-3">{renderScreen()}</div>
}

export default MainContent
