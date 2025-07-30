import { useState } from 'react'
import {BrowserRouter, Route,Routes} from  'react-router'
import './App.css'
import Login from './login.jsx'
import Home from './home.jsx'
import  Dashboard from './dashboard.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar>
      <Routes>
      <Route path="/" element={<Home/>}></Route>/
      <Route path="/" element={<Login/>}></Route>/
      <Route path="/" element={<Dashboard/>}></Route>/
        </Routes>
    </Navbar>
    </BrowserRouter>
    </>
  )
}

export default App
