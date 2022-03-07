import {useState} from "react";
import './App.css';

function App() {
  const items = ["Books","Pens","Inkpens", "Notebooks"];
  const [count, setCount] = useState(0);
  const handlechange = (value) =>{
    setCount(count+value);
  }
  return(
  <div className="items">
  <h1>Inventory Management</h1>
  <ul>{
    items.map((e) =>(
      <div className={e}>        
      <h3>{e}:{count}</h3>
      <button onClick={() =>{
        handlechange(1)
      }}>
        Add
        </button>
      <button onClick={() =>{
        if(count >=1){
          handlechange(-1);
        }
      }}>
        sub
        </button>
      </div>
    ))}
  </ul>
  <h3 className="total">{count*4}</h3>
  </div>
  );
}

export default App;
