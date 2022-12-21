import React from "react";
import "./App.css";
import Shop from "./features/shop/Shop";
import Header from "./features/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./features/cart/Cart";
import Page404 from "./Page404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
