import React, {useState,useEffect}from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
` ;


const Buton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family:  Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor:pointer;
    background-size: 400px;
  }
  
`;

function App() {
  //state de frase
  const[quote, saveQuote] = useState({});
  
  
  ///result = api
  const consultarAPI = async () =>{
    const result = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const quote = await result.json();
    saveQuote(quote[0]);
  }
  //cargar una frase
  useEffect(()=>{
    consultarAPI()
  }, []);


  return (

    <Contenedor>
      <Frase
        quote={quote}
      />

      <Buton
        onClick={consultarAPI}
      >
      Obtener frase
      </Buton>
    </Contenedor>
  );
}

export default App;
