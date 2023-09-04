import React from 'react';
import Navbar from './components/navbar/Navbar';
import './App.css';


function App() {
  return (
    <div>
      <Navbar />
      <main>
        <h1 className='welcome'>Bienvenido a LatinoGang! 🖱</h1>
      </main>
    </div>
  );
}

export default App;