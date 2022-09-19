import React, { Fragment, useState } from "react";

import api from "../services/api";
import '../styles/Busca.css'

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Header } from '../components/Header'




const Busca = () => {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

  
  

  async function searchCep() {
  
    try {
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput("")

    } catch (error) {
      alert("Digite um CEP válido")
      setInput("")
      
    }
  }
 
  function enterAddCont(e) {
    if (e.code === 'NumpadEnter') {
      searchCep()
    }
   }
  
  
  const user = localStorage.getItem('usuario');

  return (
    <Fragment>
      <Header />
      <body className="container  bg-indigo-300">
        <div className='title'>
           
          <h1 >Bem vindo! <span id="user" >  {user} </span>, Vocé está logado. </h1>
          </div>
          <div className="col-3.5 md:col-3.5 ">
          <h2>Buscador de Endereços</h2>
               
          <div className="botton">
            <Button label="Busca" onClick={searchCep}/>
            <InputText
              placeholder="Digite o CEP"
              value={input}
              onKeyUp={enterAddCont}
              onChange={(e) => setInput(e.target.value)} />
          </div><br/>
          {Object.keys(cep).length > 0 && (
            <div className='main'>
            <input value={`CEP: ${cep.cep }`}/>
            <input value={`End: ${ cep.logradouro }`}/>
            <input value={`Nº: ${cep.complemento }`}/>
            <input value={`Bairro:${ cep.bairro }`}/>
            <input value={`${cep.localidade} - ${ cep.uf }`}/>
           </div>

          )}

        </div>
      </body>
      
      
    </Fragment>
  )
}
export default Busca