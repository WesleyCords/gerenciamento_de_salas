import { Routes, Route } from 'react-router-dom'
import Login from './routes/Login'
import Register from './routes/Register'
import Home from './routes/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={ <Login />} />
        <Route path='/register' element={ <Register />} />
        <Route path='/home' element={ <Home />} />
      </Routes>
    </>
  )
}

export default App
