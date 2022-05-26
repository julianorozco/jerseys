import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greetings="Bienvenidos!" />
      <ItemCount stock={5} initial={0} />
    </>
  );
}

export default App;
