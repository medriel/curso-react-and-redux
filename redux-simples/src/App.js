import React from 'react';
import './App.css';
import Average from './components/Average';
import Sum from './components/Sum';
import Raffle from './components/Raffle';
import Interval from './components/Interval'

function App() {
  return (
    <div className="App">
      <h1>Exercício react-redux (Simples)</h1>
      <div className="line">
        <Interval />
      </div>
      <div className="line">
        <Average />
        <Sum />
        <Raffle />
      </div>
    </div>
  );
}

export default App;
