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
import Fragments from './components/Fragments';
import Container from "./components/Container"
import ExecutarFunction from "./components/ExecutarFunction"
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDatails from './components/UserDatails';
import MyComponent from "./components/MyComponent"
import TitleModule from './components/TitleModule';
import DesafioCar from './components/DesafioCar';
import MyForm from "./components/MyForm"

function App() {
  //const name = "Maria"
  const [userName] = useState("Pedro");
  const cars = [
    { id: 1, marca: "Ferrari", color: "Amarelo", newCar: true, km: 0 },
    { id: 2, marca: "Kia", color: "Branco", newCar: false, km: 15555 },
    { id: 3, marca: "Renault", color: "Azul", newCar: false, km: 45544 },
  ];

  const myCars = [
    { name: "Fusca", Km: 10000, color: "Preto" },
    { name: "Ferrari", Km: 0, color: "Branco" },
    { name: "Renault", Km: 45555, color: "Vermelho" },

  ]

  function showMessage() {
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };
  const users = [
    { id: 1, name: "Sandra", job: "Programadora", age: 48 },
    { id: 2, name: "Helena", job: "Secretaria", age: 28 },
    { id: 3, name: "Julio", job: "Aprendiz", age: 15 },
    { id: 4, name: "Pedro", job: "Atleta", age: 20 }

  ];


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
      <CarDetais marca="vw" km={22222} color="Azul" newCar={false} />
      {/*Reaproveitamento de component*/}
      <CarDetais marca="Ford" km={0} color="Preto" newCar={true} />
      <CarDetais marca="Fiat" km={555} color="Branco" newCar={false} />

      {/*Loop em array de objetos reutilizando os card*/}
      {cars.map((car) => (
        <CarDetais
          key={car.id}
          marca={car.marca}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}

      {/* fragment*/}
      <Fragments propFragment="Testando props" />

      {/*prop children*/}
      <Container value="O Conteúdo">
        <p>Este é o conteúdo</p>
      </Container>
      <Container value="Mudando so o Conteúdo">
        <h4>Mudando so o conteúdo</h4>
      </Container>

      {/*executar função */}
      <ExecutarFunction myFunction={showMessage} />

      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />

      {/*Desafio*/}
      {users.map((user) => (
        <UserDatails
          key={user.id}
          name={user.name}
          jab={user.job}
          age={user.age} />
      ))}

      {/*React e css*/}
      <MyComponent />
      <TitleModule />

      {myCars.map((car) => (
        <DesafioCar car={car} />
      ))}

      {/* Criando formulários */}
      <MyForm />
    </div>

  );
}



export default App;


