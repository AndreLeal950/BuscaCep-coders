import '../styles/Styles.css'
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex justify-content-around align-items-center bg-gray-500 p-4">
      <h1>Busca CEP</h1>

      <Link to="/">
        <Button label="HomePage" className="p-button-sm" />
      </Link>
    </header>
  );
};
