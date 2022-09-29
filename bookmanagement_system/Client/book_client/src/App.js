import "./App.css";
import Main from "./Component/main";
import Register from "./Component/Register"
import Login from "./Component/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />

      </Routes>
    </>
  )
}
export default App