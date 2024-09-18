import './App.css';
import React from 'react';
import Tenzies from './tenzies';

function App() {
  return (
    <div className="App">
      <div className='box'>
        <h1 className="tenziesTitle">
      Tenzies
        </h1>
      <p className="tenziesHowTo">
        Roll until all dice are the same. Click each die to freeze it at its current value between rolls
      </p> 
      <Tenzies />
      </div>
    </div>
  );
}

export default App;
