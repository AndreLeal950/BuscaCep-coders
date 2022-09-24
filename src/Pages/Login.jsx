import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import '../styles/Login.css'

export const Login = () => {
  
  const [user, setUser] = useState('');
  
  const navigate = useNavigate();

  const nomes = ['Galdanf', 'Sauron', 'Luke'] 

  const CepLogin = (nome) => {
    if (nomes.includes(nome)) {
      
      return navigate('/busca')
           
    } else return navigate('/NotPermission') 
      
      
  }

  useEffect(() => {
    localStorage.setItem('Nome', user)
  }, [user]);



return (
    <>
      <Header />
      <div id="HomePage" className="flex justify-content-between flex-column w-full h-screen bg-indigo-300">
        <div className="body">
          <h1>Página Home</h1>
          <h3>Faça seu Login</h3>
          <InputText
          value={user}
          placeholder="Digite seu Nome"
          type={'text'}
          onChange={(e) => setUser(e.target.value)}
                    
        /><br/>
          <Button label="Faça seu Login" onClick={() => CepLogin(user)} />
                    
        </div>
      </div>
      <Footer />
      </>
  );
};
