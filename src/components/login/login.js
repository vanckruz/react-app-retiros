import React, { Component } from 'react';
import wallet from './wallet.png';
import history from './history.png';

class Login extends Component {
  render() {
    return (   
        <div className="container">     
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src={wallet} alt="Card image cap"/>
                        <div className="card-block">
                            <h4 className="card-title">Gestión de wallet</h4>
                            <p className="card-text">utilice esta app como su billetera personal y administre su dinero.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
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
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src={history} alt="Card image cap"/>
                        <div className="card-block">
                            <h4 className="card-title">Consulta</h4>
                            <p className="card-text">Consulte sus gastos y retiros de una manera rápida.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Login
