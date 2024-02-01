import React from "react";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <div className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Don't miss out on this amazing deal. Order now and satisfy your
            pizza cravings in no time. Get additional Cashback upto ₹100* with
            payment via Digital Wallet Partners. Order Now! Safe & Hygienic.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu. Please come back later :) </p>
      )}

      {/*
      <Pizza
      name="Focaccia"
      ingredients="Bread with italian olive oil and rosemary"
      price={6}
      photoName="pizzas/focaccia.jpg"
      soldOut="false"
      />
      <Pizza
      name="Focaccia"
      ingredients="Bread with italian olive oil and rosemary"
      price={7}
      photoName="pizzas/focaccia.jpg"
      soldOut="false"
      />
      <Pizza
      name="Focaccia"
      ingredients="Bread with italian olive oil and rosemary"
      price={9}
      photoName="pizzas/focaccia.jpg"
      soldOut="false"
      />
    */}
    </div>
  );
}

function Footer() {
  // return React.createElement("footer", null, "We are currently open..!");
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 18;
  const isOpen = openHour <= hour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're currently closed. Please Come back tomorrow at {openHour}:00 AM
          :)
        </p>
      )}
    </footer>
  );
}

function Pizza({ pizzaObj }) {
  // console.log(props);
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3> {pizzaObj.name} </h3>
        <p> {pizzaObj.ingredients}</p>

        {/* {pizzaObj.soldOut ? (
          <span> SOLD OUT </span>
        ) : (
          <span>pizzaObj.price</span>
        )} */}

        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Order(props) {
  return (
    <div className="order">
      <p> We are open until {props.closeHour}:00. Come visit us.</p>
      <button className="btn">Order</button>
    </div>
  );
}

export default App;
