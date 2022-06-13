import "./App.css";
import React from "react";
import { CartContextProvider } from "./context/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/detail/:productId" element={<ItemDetailContainer />} />
            <Route path="/cart/" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
};

export default App;
