import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";       
import About from "./pages/About";
import Settings from "./pages/Settings";
import Features from "./pages/Features";
import UseCase from "./pages/UseCase";
import Testimonials from "./pages/Testimonials";
import Pricing from "./pages/Pricing";  
import Contacts from "./pages/Contacts";
import ProtectedRoute from "./components/ProtectedRoute";  

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
            <Dashboard />
            </ProtectedRoute>
            }
        />
        <Route path="/about" element={<About />}/>
        <Route path="/settings" element={<Settings />}/>
        <Route path="/resources/use-cases" element={<UseCase />} />
        <Route path="/resources/testimonials" element={<Testimonials />} />
        <Route path="/resources/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/contacts" element={<Contacts />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;