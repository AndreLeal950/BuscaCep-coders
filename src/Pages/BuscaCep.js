import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";


export const BuscaCep = () => {
  const [adress, myAdress] = useState([]);
  const [cepValue, getCepValue] = useState("");

  const location = useLocation();

  console.log(location.state)

  

  const getCep = async () => {
    const { data } = await axios.get(
      `https://viacep.com.br/ws/${document}/json/`
    );
    myAdress(data);
  };

  return (
    <div className="BuscaCep flex justify-content-between flex-column w-full h-screen bg-indigo-300">
      <Header />
      <div className="flex flex-column w-full align-items-center justify-content-center gap-3 p-3">
        <InputText
          placeholder="Digite o cep"
          value={cepValue}
          onChange={(e) => getCepValue(e.target.value)}
        />
        <Button label="Pesquisar cep" onClick={() => getCep()} />
        <div className="flex flex-column align-items-center justify-content-center">
          <h5>Bairro</h5>
          <p>{adress.bairro}</p>
          <h5>Rua</h5>
          <p>{adress.logradouro}</p>
          <h5>Estado</h5>
          <p>{adress.uf}</p>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};
