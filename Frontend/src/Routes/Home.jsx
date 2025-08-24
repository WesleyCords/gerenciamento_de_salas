import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainHome/MainContent'
import MenuRespo from '../components/MenuRespon'

const Home = () => {
  const [screenActual, setScreenActual] = useState('dashboard')
  const userDate = JSON.parse(localStorage.getItem('user'))

  console.log(screenActual)

  return (
    <div className="block sm:flex min-h-screen bg-white">
      <Sidebar onSelectScreen={setScreenActual} screenSelect={screenActual} />
      <MenuRespo onSelectScreen={setScreenActual} screenSelect={screenActual}/>
      <MainContent screen={screenActual} user={userDate}/>
    </div>
  )
}

export default Home
