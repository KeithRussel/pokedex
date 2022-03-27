import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <header className="site-header">
      <div className="wrapper site-header__wrapper">
        <Link to="/" className="brand">
          Brand
        </Link>
        <nav className="nav">
          <button
            className="nav__toggle"
            aria-expanded="false"
            type="button"
            onClick={handleToggle}
          >
            {navbarOpen ? (
              <MdClose
                style={{ color: "#fff", width: "20px", height: "20px" }}
              />
            ) : (
              <FiMenu
                style={{ color: "#7b7b7b", width: "20px", height: "20px" }}
              />
            )}
          </button>
          <ul
            className={`menuNav ${navbarOpen ? " showMenu" : ""}nav__wrapper`}
          >
            <li className="nav__item active-link">
              <Link to="/" onClick={() => closeMenu()}>
                Homes
              </Link>
            </li>
            <li className="nav__item active-link">
              <Link to="/about" onClick={() => closeMenu()}>
                Abouts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
