import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function useHauntedHouses() {
  return useState(["Creepy Manor"])[0];
}

function useGhostCount(houseName: string) {
  return useState(5)[0];
}

function App() {
  // for each haunted house, how many ghosts are there?

  const hauntedHouses = useHauntedHouses();

  return (
    <div className="App">
      <ul>
        {hauntedHouses.map((hauntedHouse) => (
          <li> {useGhostCount(hauntedHouse)} </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
