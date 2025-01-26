import React from "react";
import { useState } from "react";
import "./App.css";
import "./styles.css";
import MoviesGrid from "./components/MoviesGrid";

function App() {
  return (
    <div className="App">
      <div className="container">
        <MoviesGrid></MoviesGrid>
      </div>
    </div>
  );
}

export default App;
