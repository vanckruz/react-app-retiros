import React, { Component } from 'react';
import logo from '../../logo.svg';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header>
          <nav className="navbar navbar-inverse bg-primary">
            <a className="navbar-brand">
              <img src={logo} width="30" height="30" className="app-logo d-inline-block align-top" alt="logo" />
              Jhonny's wallet
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Fondos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Retirar</a>
                </li>
              </ul>
            </div>            
          </nav>
       
          <h1 className="hidden-sm-down hidden-xs-down">React wallet app</h1>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon className="svg--sm" fill="#fff" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"/>
            <polygon className="svg--lg" fill="#fff" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" />
          </svg>
      </header>
    );
  }
}

export default Header;
