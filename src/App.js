import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greetings="Bienvenidos!" />
    </>
  );
}

export default App;
