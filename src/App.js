import React from "react";
import "./App.css";
import Search from "./components/Search";
import Product from "./components/Product";
import Wishlist from "./components/Wishlist";

function App() {
  return (
    <div className="App">
      <Search />
      <Product />
      <Wishlist />
    </div>
  );
}

export default App;
