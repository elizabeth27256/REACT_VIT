import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="navbar">
      <div className="navbar-container" ref={navRef}>
        <Link to="/" className="logo">
          ⚡ ZEUS UI
        </Link>
        <nav className="menu">
          <Link to="/about" className="menu-link">
            About us
          </Link>

          <div className="dropdown">
            <button
              className={`menu-link dropdown-button ${openDropdown === "solutions" ? "active" : ""}`}
              onClick={() => toggleDropdown("solutions")}
            >
              Solutions <span className="arrow">{openDropdown === "solutions" ? "▲" : "▼"}</span>
            </button>
            {openDropdown === "solutions" && (
              <div className="dropdown-menu">
                <Link to="/dashboard" className="dropdown-item" onClick={() => setOpenDropdown(null)}>
                  Dashboard
                </Link>
                <Link to="/settings" className="dropdown-item" onClick={() => setOpenDropdown(null)}>
                  Settings
                </Link>
              </div>
            )}
          </div>

          <div className="dropdown">
            <button
              className={`menu-link dropdown-button ${openDropdown === "resources" ? "active" : ""}`}
              onClick={() => toggleDropdown("resources")}
            >
              Resources <span className="arrow">{openDropdown === "resources" ? "▲" : "▼"}</span>
            </button>
            {openDropdown === "resources" && (
              <div className="dropdown-menu">
                <Link to="/resources/use-cases" className="dropdown-item" onClick={() => setOpenDropdown(null)}>
                  Use cases
                </Link>
                <Link to="/resources/testimonials" className="dropdown-item" onClick={() => setOpenDropdown(null)}>
                  Testimonials
                </Link>
                <Link to="/resources/features" className="dropdown-item" onClick={() => setOpenDropdown(null)}>
                  Features
                </Link>
              </div>
            )}
          </div>

          <Link to="/pricing" className="menu-link">
            Pricing
          </Link>
          <Link to="/contacts" className="menu-link">
            Contacts
          </Link>
          <Link to="/login" className="menu-link">
            Login
          </Link>
        </nav>
        <Link to="/signup" className="cta-button">
          Try for free
        </Link>
      </div>
    </header>
  );
}
