import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import '../styles/Login.css'

const nomes = ['Galdanf', 'Sauron', 'Luke'] 

export const Login = () => {
  
  const [user, setUser] = useState('');
  
  const navigate = useNavigate();


  const CepLogin = () => {
    
    localStorage.setItem('Nome', nomes)
    
    if (nomes !== user) {
      
      navigate('/NotPermission')
      
    } else {
      
      navigate('/busca', { state: `Seja bem vindo(a) ${user}` })
    }
       
     
     setUser('')      
  }
  
  return (
    <>
      <Header />
      <div id="HomePage" className="flex justify-content-between flex-column w-full h-screen bg-indigo-300">
        <div className="body">
          <h1>Página Home</h1>
          <h3>Faça seu Login</h3>
          <InputText
          value={user}
          // onKeyUp={enterAddCont}
          placeholder="Digite seu Nome"
          type={'text'}
          onChange={(e) => setUser(e.target.value)}
          
          
        /><br/>
          <Button label="Faça seu Login" onClick={CepLogin} />
         
          {/* <Button label="Seu cadastro" onClick={adicionarUserLs} /> */}
          
         
        </div>
      </div>
      <Footer />
      </>
  );
};
