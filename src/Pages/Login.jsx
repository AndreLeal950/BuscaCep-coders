import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import '../styles/Login.css'

export const Login = () => {

  const [name, setName] = useState();
  const navigate = useNavigate();
 
  const cepLogin = () => {
    if (localStorage.getItem('usuario') === null) {
            navigate('/cadastro')
    } else {
      navigate('/busca')
    }  
  }
 
  function enterAddCont(e) {
    if (e.code === 'NumpadEnter') {
    
    }
  }

  return (
    <>
      <Header />
      <div id="HomePage" className="flex justify-content-between flex-column w-full h-screen bg-indigo-300">
        <div className="body">
          <h1>Faça seu Login</h1>
          <InputText
          value={name}
          onKeyUp={enterAddCont}
          placeholder="Digite seu Nome"
          type={'text'}
          onChange={(e) => setName(e.target.value)}
          
          
        /><br/>
          <Button label="Logar" onClick={cepLogin} />
          <p>Novo por aqui? Faça Seu <span><Link to={'/cadastro'}>Cadastro.</Link></span></p>
         
        </div>
      </div>
      <Footer />
      </>
  );
};
