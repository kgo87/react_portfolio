import React from "react";
import "./style.css";

function Navbar() {

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          
          <li className="nav-item active">
            <a className="nav-link" href="/">About <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/portfolio">Portfolio </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/contact">Contact </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="https://docs.google.com/document/d/1kpVZz2VRODdosy6vBhxB6QF7SVNu1FAA8NioZOMAQOE/edit" target="_blank">Resume </a>
          </li>

        </ul>
      </div>
    </nav>

  )
};

export default Navbar;