import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Busca  from "../Pages/Busca";
import Cadastro from "../Pages/Cadastro";
import { Login } from "../Pages/Login";
import { NotFound } from "../Pages/NotFound";




export const MyRoutes = () => {
    return (
      <Router>
        <Routes>
         
          <Route exact path="/" element={<Login />} />
          <Route exact path="/cadastro" element={<Cadastro />} />
          <Route exact path="/busca" element={<Busca />} />
          <Route exact path="/busca/:document" element={<Busca />} />          
          <Route exact path="*" element={<NotFound />} />          
        </Routes>
      </Router>
    );
}