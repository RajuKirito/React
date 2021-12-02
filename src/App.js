import {useState} from 'react'
import "./App.css";

function App(){

  let [counter, setCounter] = useState(0);

  return(
    <div class = 'App'>
      <header>
        <h1>
          <h2>Counter app for using state</h2>
        </h1>
      </header>
      <h2>Current value of count is {counter}</h2>
      <button onClick = {()=>  setCounter(0)  }>Reset Counter</button>
      <button onClick = {()=>counter<10 ? setCounter(counter+1) : ""}>Increase Counter</button>
      <button onClick={() => counter> 0 ? setCounter(counter - 1) : ""}>Decrease Counter</button>
    </div>
  );
}

export default App;