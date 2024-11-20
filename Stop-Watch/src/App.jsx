import { useState,useRef,useEffect } from 'react'
import { BrowserRouter, Routes, Route , Link, Outlet } from 'react-router-dom'


function App() {
  const [currentCount,setCurrentCount] = useState(0);
  const timer = useRef();
  const [toggle,setToggle] = useState(false);

  function button() {
    if (toggle) {
      clearInterval(timer.current)
    }
    else {
      let value = setInterval(() => {
        setCurrentCount(count => count + 1)
      }, 1000);
      timer.current = value;
    }
    setToggle(!toggle)
  }

  function reset() {
    setCurrentCount(count => count = 0)
    clearInterval(timer.current)
    setToggle(false)
  }

  const hours = Math.floor(currentCount / 3600);
  const minutes = Math.floor((currentCount % 3600) / 60);
  const seconds = currentCount % 60;
 
  return (
    <div className="central">
      <div className="all">
        <div className="time">
          {hours.toString().padStart(2, "0")}:
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
          <br />
        </div>
        <div className="buttons">
          <button onClick={button}>{toggle ? "Stop" : "Start"}</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}


export default App
