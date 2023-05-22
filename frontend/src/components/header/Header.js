import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/tree-logo-free-vector.jpg"

const Header = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div>
        <img src={image} class="logo"  width="45px" height="45px" margin="2px"/>
        </div>
        <div className="container">
          <a className="navbar-brand" href="/">
            PLANTING HELP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/home">
                 Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ngo">
                 Our Ngos
                </a>
              </li>
              <li className="nav-item">
              <li className="nav-item" onClick={handleLogout}>
                <a className="nav-link">
                Logout
                </a>
              </li>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="line"></div>
    </>
  );
};

export default Header;
