import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/login';
import Home from './Components/home';

function App() {
  return (
    <div>
      <main role="main" className="container">
        <Login/>
      </main>
    </div>
  );
}

export default App;
