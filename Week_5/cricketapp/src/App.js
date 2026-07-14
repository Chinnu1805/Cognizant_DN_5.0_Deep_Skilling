import React from "react";
import ListofPlayers from "./ListofPlayers.js";
import {
  OddPlayers,
  EvenPlayers,
  ListofIndianPlayers,
  IndianPlayers,
} from "./IndianPlayers";

function App() {
  const flag = true; // Change to false for second output

  if (flag === true) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListofPlayers />

        <hr />

        <h1>List of Players having Scores Less than 70</h1>
        <ListofPlayers scoreBelow70={true} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Indian Team</h1>

        <h2>Odd Players</h2>
        {OddPlayers(IndianPlayers)}

        <hr />

        <h2>Even Players</h2>
        {EvenPlayers(IndianPlayers)}

        <hr />

        <h1>List of Indian Players Merged:</h1>
        <ListofIndianPlayers />
      </div>
    );
  }
}

export default App;