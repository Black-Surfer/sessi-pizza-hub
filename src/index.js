import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const pizzaData = [
  {
      name: "ficaccia",
      ingredients: "Bread, tomato sause and olive oil",
      price: 2,
      photoName: "pizza/P1.jpeg",
      soldOut: false
  },
  {
      name: "Pizza margheriata",
      ingredients: "tomato sause and mozarella",
      price: 10,
      photoName: "pizza/P2.jpeg",
      soldOut: true
  },
  {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach and ricotta cheese",
      price: 20,
      photoName: "pizza/P3.jpeg",
      soldOut: false
  }
]

function App(){
  return (
<div className='container'>
  <Header></Header>
  <Pizza></Pizza>
  <Pizza></Pizza>
  <Pizza></Pizza>
  <Footer></Footer>
</div>
  );
}

function Header(){
  return (
  <header className='header'>
      <h1>SESSI PIZZA HUB</h1>
  </header>
  );
}

function Menu(){
  return (
    <main>
      <h2>Our Menu</h2>
      <Pizza></Pizza>
      <Pizza></Pizza>
      <Pizza></Pizza> 
    </main>
  )
}
function Footer(){
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 12;
  const isOpen = hour >= openHour && hour <= closeHour;


  // if(hour >= openHour && hour <= closeHour) alert("We're currently open !");
  // else alert("Sorry we are closed!");

   
  return <footer>{new Date().toLocaleTimeString()}, We're currently open !</footer>

}
function Pizza(){
  return <div>
    <h2>PIZZA</h2>
    <p>Tomato, mozarella, spinach and ricotta cheese</p>
    <img src ="pizza/P1.jpeg" alt="pizza spinacci" />

  </div>
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
