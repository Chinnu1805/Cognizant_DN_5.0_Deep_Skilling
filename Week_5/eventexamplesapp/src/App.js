import React from "react";
import CurrencyConvertor from "./CurrencyConverter";

function App() {

  let count = 5;

  function increment() {
    count++;
    alert("Counter = " + count);
  }

  function sayHello() {
    alert("Hello! Member!");
  }

  function handleIncrement() {
    increment();
    sayHello();
  }

  function decrement() {
    count--;
    alert("Counter = " + count);
  }

  function sayWelcome(message) {
    alert(message);
  }

  function handleClick() {
    alert("I was clicked");
  }

  return (
    <div>

      <p>{count}</p>

      <button onClick={handleIncrement}>
        Increment
      </button>

      <br/><br/>

      <button onClick={decrement}>
        Decrement
      </button>

      <br/><br/>

      <button onClick={() => sayWelcome("Welcome")}>
        Say welcome
      </button>

      <br/><br/>

      <button onClick={handleClick}>
        Click on me
      </button>
      <CurrencyConvertor/>
    </div>
  );
}

export default App;