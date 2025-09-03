import { Routes, Route } from "react-router-dom";
import Login from "./Routes/Login";
import Register from "./Routes/Register";
import Home from "./Routes/Home";
import LandingPage from "./Routes/LandingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
