import React, { Component } from 'react';
import logo from '../../logo.svg';

class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-inverse bg-primary">
        <a className="navbar-brand">
            <img src={logo} width="30" height="30" className="app-logo d-inline-block align-top" alt="logo" />
            Jhonny's wallet
        </a>           
        </nav>
    );
  }
}

export default Nav;
          