import { useState } from 'react';
import Reorder from './Reorder.jsx'; 
import './App.css';
function App() {
  const [count, setCount] = useState(0);

  function onReorder(Count) {
    setCount(Count);
  };
  return (
    <div>
      <span>Inventory Count: {count}</span>
      <button onClick={() => setCount(count +1)}>+</button>
      <button onClick={() => setCount(count -1 )} disabled={!count}>-</button>
      {count === 0  && <Reorder onReorder={onReorder} />}
    </div>
  );
}

export default App;
