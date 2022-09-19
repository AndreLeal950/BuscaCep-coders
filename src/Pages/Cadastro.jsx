import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import '../styles/Cadastro.css'


function Cadastro () {

  const [user, setUser] = useState([]);
  
  const navigate = useNavigate()

  const saveUserLs = () => {
    localStorage.setItem('usuario', user)
    navigate('/busca', { state: `${user}.` })
  }
 
  function enterAddCont(e) {
    if (e.code === 'NumpadEnter') {
      saveUserLs()
      
    }
  }
    

  return (
    <>
      <Header />
      <div id="HomePage" className="flex justify-content-between flex-column w-full h-screen bg-indigo-300">
        <div className="body">
          <h1>Faça seu Cadastro</h1>
        
        <InputText
          value={user}
          onKeyUp={enterAddCont}
          placeholder="Digite seu Nome"
          type={'text'}
          onChange={(e) => setUser(e.target.value)}
        /><br/>
         <Button label="Cadastrar" onClick={saveUserLs}/>
        </div>
      </div>
      <Footer />
      </>
  );
};
export default Cadastro
