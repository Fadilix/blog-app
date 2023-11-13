import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../scss/Navbar.scss";

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const navigate = useNavigate();
  return (
    <div className="navbar">
      <h1 onClick={() => navigate("/")}>Blogify</h1>
      <div className="links">
        <Link to="/blogs">Blogs</Link>
        <Link to="/write">Write</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
      <div className="hamburger">
        {!showMenu && (
          <button className="ham-button" onClick={handleShowMenu}>
            <div className="ham1"></div>
            <div className="ham2"></div>
            <div className="ham3"></div>
          </button>
        )}

        {showMenu && (
          <>
            <button className="cancel-button" onClick={handleShowMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=""
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="content" style={{ textAlign: "center" }}>
              <Link to="/blogs">Blogs</Link>
              <Link to="/write">Write</Link>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
