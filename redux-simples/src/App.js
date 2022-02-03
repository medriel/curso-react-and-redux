import React, { useState } from 'react';
import './App.css';
import Average from './components/Average';
import Sum from './components/Sum';
import Raffle from './components/Raffle';
import Interval from './components/Interval'

function App() {

  const [min, setMin] = useState(null)
  const [max, setMax] = useState(null)

  return (
    <div className="App">
      <h1>Exercício react-redux (Simples)</h1>
      <div className="line">
        <Interval
          min={min}
          max={max}
          onMinChanged={setMin}
          onMaxChanged={setMax}
        />
      </div>
      <div className="line">
        <Average min={min} max={max} />
        <Sum min={min} max={max} />
        <Raffle min={min} max={max} />
      </div>
    </div>
  );
}

export default App;
