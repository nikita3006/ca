import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    setResult(result => result + inputValue);
    resetInput(e);
  }

  function minus(e) {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    setResult(result => result - inputValue);
    resetInput(e); 
  }
  
  function times(e) {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    setResult(result => result === 0 ? inputValue : result * inputValue);
    resetInput(e); 
  }
  
  function divide(e) {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    if (inputValue !== 0) {  
      setResult(result => result === 0 ? inputValue : result / inputValue);
    }
    resetInput(e); 
  }

  function resetInput(e) {
    e.preventDefault()
    inputRef.current.value = "";
  }

  function resetResult() {
    inputRef.current.value = "";
    setResult(0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>Add</button>
        <button onClick={minus}>Subtract</button>
        <button onClick={times}>Multiply</button>
        <button onClick={divide}>Divide</button>
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button>
      </form>
    </div>
  );
}

export default App;