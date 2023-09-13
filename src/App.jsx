/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
// import '@sweetalert2/themes/dark/dark.scss';
import swal from 'sweetalert';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="main-container"></div>
      
      <Home></Home>
     
    </>
  )
}

export default App
