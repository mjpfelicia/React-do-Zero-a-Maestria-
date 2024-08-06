import './App.css';
import Component from "./components/Component";
import Challenge from "./components/Challenge";
import Imagens from "./components/Imagens"
import ManageData from "./components/ManageData";
import ListeRender from "./components/ListeRender";
import CondicionalRender from "./components/CondicionalRender";
import IfEelse from "./components/IfEelse";
import ShowUserName from "./components/ShowUserName";
import CarDetais from './components/CarDetais';
import { useState } from 'react';



function App() {
  //const name = "Maria"
  const [userName] = useState("Pedro")

  return (
    <div className="App">
      {/*Valores impressos na tela.*/}
      <Challenge />

      {/*Soma de dois números com Clicks*/}
      <Component />

      {/*Imagens em src*/}
      <Imagens />

      {/*useState na prática*/}
      <ManageData />

      {/*Renderização de listas*/}
      <ListeRender />

      {/*Renderização condicional*/}
      <CondicionalRender />

      {/*If e else no jsx ternário*/}
      <IfEelse />

      {/* /Introdução de Props*/}
      <ShowUserName name={userName} />

      {/* Destructuring em props*/}
      <CarDetais />

    </div>

  );
}



export default App;


