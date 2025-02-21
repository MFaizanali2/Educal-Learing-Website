import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch, faBagShopping
} from "@fortawesome/free-solid-svg-icons";
import { faChartBar } from "@fortawesome/free-regular-svg-icons";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo flex items-center">
        <img src="./images/logo.png" alt="Logo" />
      </div>
      <div className="some flex">
        <FontAwesomeIcon icon={faChartBar} className="text-2xl"/>
        <li>
          <a href="#" className="">
            Category
          </a>
        </li>
      </div>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Course</a>
        </li>
        <li>
          <a href="#">Instructor</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <div className="nav-btn">
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faBagShopping} />
          <button>Login</button>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
