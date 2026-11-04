import React from 'react';
import logo from './logo.svg';
import './App.css';

import StateComponent from './components/StateComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StateComponent title="State Component Title"/>
      </header>
    </div>
  );
}

export default App;
