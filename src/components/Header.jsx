import '../styles/Styles.css'
import { Button } from "primereact/button";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate()
  
  const cleanStorage = () => {
    localStorage.clear()
     navigate('/')
  }
  return (
    <header className="flex justify-content-around align-items-center bg-gray-500 p-4">
      <h1>Busca CEP</h1>

      <Link to="/">
        <Button label="Página Inicial" className="p-button-sm" onClick={cleanStorage} />
      </Link>
     </header>
  );
};
