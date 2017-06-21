import React, { Component } from 'react';
class Login extends Component {
  render() {
    return (
        <div className="card">
            <div className="card-header">
                Login
            </div>
            <div className="card-block">
                <h4 className="card-title">Inicia sesión fácilmente con google</h4>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a className="btn btn-primary"><i className="fa fa-google" aria-hidden="true"></i> Login with google</a>
            </div>
        </div>
    );
  }
}

export default Login
