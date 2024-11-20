import { useState,useRef,useEffect } from 'react'
import { BrowserRouter, Routes, Route , Link, Outlet } from 'react-router-dom'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<Layout />}>
//         <Route path='/' element={<Landing />}/>
//         <Route path='/neet/online-coaching-class-11' element={<Class11Program />} />
//         <Route path='/neet/online-coaching-class-12' element={<Class12Program />}/>
//         <Route path='*' element={<ErrorPage />}/>
//       </Route>
//     </Routes>
//     Footer | Contact us
//     </BrowserRouter>
//     </>
//   )
// }

// function Layout() {
//   return <div>
//     <div>
//       <Header />
//     </div>
//     <div>
//       <Outlet />
//     </div>
//   </div>
// }

// function Header() {
//   return <div>
//       <div>
//         <Link to='/'>Allen</Link> | <Link to='/neet/online-coaching-class-11'>Class 11</Link>  | <Link to='/neet/online-coaching-class-12'>Class 12</Link>
//       </div>
//     </div>
// }

// function Landing() {
//   return <div>
//     Welcome to allen
//   </div>
// }

// function Class11Program() {
//   return <div>
//     NEET programs for Class 11th
//   </div>
// }

// function Class12Program() {
//   return <div>
//     NEET programs for Class 12th
//   </div>
// }
// function ErrorPage() {
//   return <div>
//     Sorry Page Not Found
//   </div>
// }


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