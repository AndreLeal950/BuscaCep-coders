import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Busca  from "../Pages/Busca";
import { Login } from "../Pages/Login";
import { NotFound } from "../Pages/NotFound";
import { NotPersmission } from "../Pages/NotPermission";





export const MyRoutes = () => {
    return (
      <Router>
        <Routes>
         
          <Route exact path="/" element={<Login />} />
          <Route exact path="/busca" element={<Busca />} />
          <Route exact path="/busca/:document" element={<Busca />} />          
          <Route exact path="*" element={<NotFound />} />          
          <Route exact path="/notPermission" element={<NotPersmission />} />
        </Routes>
      </Router>
    );
}