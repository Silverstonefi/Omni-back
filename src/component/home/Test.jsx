import { useState } from "react";
import "./test.css"

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mean-container">
      <button
        className="mean-bar"
        onClick={toggleMenu}
        aria-label="Toggle Mobile Menu"
      >
        <span className="hamburger"></span>
      </button>
      <nav className={`mean-nav ${isOpen ? "open" : ""}`}>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a href="Index.php" className="nav-link dropdown-toggle active">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="about.php" className="nav-link dropdown-toggle">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="services.php" className="nav-link dropdown-toggle">
              Services
            </a>
          </li>
          <li className="nav-item mean-last">
            <a href="contact.php" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default MobileMenu;