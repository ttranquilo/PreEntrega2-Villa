import React from 'react';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css';


function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Bienvenido a LatinoGang! 🖱"}/>
    </div>
  );
}

export default App;