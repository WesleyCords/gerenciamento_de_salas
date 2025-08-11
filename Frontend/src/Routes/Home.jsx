import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainContent'

const Home = () => {
  const [screenActual, setScreenActual] = useState('inicial')

  return (
    <div className="flex min-h-screen bg-secundary">
      <Sidebar onSelectScreen={setScreenActual} />
      <MainContent screen={screenActual} />
    </div>
  )
}

export default Home
