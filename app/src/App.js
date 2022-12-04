import React from "react";
import "./App.css";
import Shop from "./features/shop/Shop";
import Header from "./features/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Shop />
    </div>
  );
}

export default App;
