import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

let pizzaData = [
  {
    name: "Ficaccia",
    ingredients: "Bread, tomato sause and olive oil",
    price: 2,
    photoName: "pizza/P1.jpeg",
    soldOut: false,
  },
  {
    name: "Pizza margheriata",
    ingredients: "tomato sause and mozarella",
    price: 10,
    photoName: "pizza/P2.jpeg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach and ricotta cheese",
    price: 20,
    photoName: "pizza/P3.jpeg",
    soldOut: true,
  },
];

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
}

function Menu() {
  const length = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine. 6 creatice dishes to choose from.All from our
        stone oven, all organic , all delicious.
      </p>
      <div>
        {length > 0 &&
          pizzaData.map((pizza, index) => (
            <Pizza key={index} pizzaObj={pizza} />
          ))}
      </div>
    </main>
  );
}

function Pizza({ pizzaObj }) {
  const { photoName, name, ingredients, price, soldOut } = pizzaObj;
  return (
    <>
      <div className={`pizza ${soldOut ? "sold-out" : ""}`}>
        <img src={photoName} alt={name} />
        <div>
          <h2>{name}</h2>
          <p>{ingredients}</p>
          <span>{soldOut ? "SOLD OUT" : price}</span>
        </div>
      </div>
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>SESSI PIZZA HUB</h1>
    </header>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <div>
          <div className="order">
            <p>
              We're open until {closeHour}:00. Come visit us or order online.
            </p>
            <button className="btn">Order</button>
          </div>
        </div>
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
