import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Settings from "./Settings";
import Features from "./Features";
import UseCase from "./UseCase";
import Testimonials from "./Testimonials";
import  Princing from "./Pricing";
import Contacts from "./Contacts";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/settings" element={<Settings />}/>
        <Route path="/resources/use-cases" element={<UseCase />} />
        <Route path="/resources/testimonials" element={<Testimonials />} />
        <Route path="/resources/features" element={<Features />} />
        <Route path="/pricing" element={<Princing />}/>
        <Route path="/contacts" element={<Contacts />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;