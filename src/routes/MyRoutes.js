import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BuscaCep } from "../Pages/BuscaCep";
import { HomePage } from "../Pages/Home";
import { LoginPage } from "../Pages/Login";
import { NotFound } from "../Pages/NotFound";




export const MyRoutes = () => {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/cep" element={<BuscaCep />} />
          <Route exact path="/cep/:document" element={<BuscaCep />} />          
          <Route exact path="*" element={<NotFound />} />          
        </Routes>
      </Router>
    );
}