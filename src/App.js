import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
//import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemDetailContainer />
    </>
  );
}

export default App;
