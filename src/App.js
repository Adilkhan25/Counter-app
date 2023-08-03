import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  function decreaseHandler()
  {
    setCount(count-1);
  }
  function increaseHandler()
  {
    setCount(count+1);
  }
  function resetHandler()
  {
    
    setCount(0);
  }
  return (
    <div className="container">
      <div className="box_1">
        <p>
          Increament And Decreament
        </p>
      </div>
      <div className="box_2">
        <button className="minus" onClick={decreaseHandler}>
          -
        </button>
        <div className="number">{count}</div>
        <button className="plus" onClick={increaseHandler}>
           +
        </button>
      </div>
      <button className='reset-btn' onClick={resetHandler}>Reset</button>
    </div>

  );
}

export default App;
