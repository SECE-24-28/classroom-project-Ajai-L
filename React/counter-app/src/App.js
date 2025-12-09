import './App.css';
import { useState } from "react";

function App() {

  const [val, setVal] = useState(0);

  const increment = () => {
    setVal(val + 1);
    console.log("Increment button clicked", val);
  };

  const decrement = () => {
    if(val>0){
      setVal(val - 1);
      console.log("Decrement button clicked", val);
    } 
  };

  return (
    <div className="App">
      <h1>Counter App</h1>

      <div className="counter">
        <h1 className='val'>{val}</h1>

        <div className="buttons">
          <button className="btn1" onClick={increment}>INC</button>
          <button className="btn2" onClick={decrement}>DEC</button>
        </div>
      </div>
    </div>
  );
}

export default App;
