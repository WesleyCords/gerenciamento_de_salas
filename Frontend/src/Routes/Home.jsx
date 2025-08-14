import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainHome/MainContent'

const Home = () => {
  const [screenActual, setScreenActual] = useState('inicial')
  const userDate = JSON.parse(localStorage.getItem('user'))

  return (
    <div className="flex min-h-screen bg-secundary">
      <Sidebar onSelectScreen={setScreenActual} />
      <MainContent screen={screenActual} user={userDate}/>
    </div>
  )
}

export default Home
