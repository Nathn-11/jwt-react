import { Route, Routes } from "react-router-dom";
import Header from "./pages/header/Header";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";
import Dashboard from "./pages/dashbaord/Dashboard";

function App() {
  return (
   <>
   <Header></Header>
   <Routes>
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/register" element={<Signup></Signup>}></Route>
    <Route path="/dashbaord" element={<Dashboard></Dashboard>}></Route>
   </Routes>
   </>
  );
}

export default App;
