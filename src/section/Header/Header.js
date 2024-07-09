import React from "react";
import logo from "../../assets/images/logo.jpg";
import NavItem from "../../Components/NavItem/NavItem";
import "./Header.css";
import {Link} from 'react-router-dom'

const Header = (props) => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-scandry">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt=""
            style={{ maxWidth: "60px", maxHeight: "40px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  " id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0">
          <NavItem><Link to='/' className="nav-link" >Home</Link></NavItem>
          <NavItem><Link to='/Profile' className="nav-link" >Profile</Link></NavItem>
          <NavItem><Link to='/' className="nav-link" >Home</Link></NavItem>
          <NavItem><Link to='/' className="nav-link" >Home</Link></NavItem>
         
          </ul>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
