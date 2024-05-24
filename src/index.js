import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

let pizzaData = [
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
  //callendpoint
  return (
<div className='container'>
  <Header></Header>
 <Menu></Menu>
  <Footer></Footer>
</div>
  );
}


function Pizza(props){
  console.log(props);
  return (
  <div className="pizza">
    <img src ={props.photoName} alt={props.name} />
    <div>
      <h2>{props.name}</h2>
      <p>{props.ingredients}</p>
      <span>{props.price}</span>
    </div>
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
  const length = pizzaData.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div>
        {
        length > 0 ?
        pizzaData.map(pizza => <Pizza 
        key={pizza.name}
        name={pizza.name} 
        ingredients={pizza.ingredients}
        photoName = {pizza.photoName}
        price = {pizza.price}
        />) : null
        }
      </div>
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
