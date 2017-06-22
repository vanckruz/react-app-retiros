import React, { Component } from 'react';
import wallet from './wallet.png';
import history from './history.png';
import './login.css'

class Login extends Component {
  constructor(...props){
    super(...props)
    this.state = {
      wallet: {},
      user: {},
      admin: {}
    }

    this.loginUser = this.loginUser.bind(this);
    this.loginAdmin = this.loginAdmin.bind(this);

  }
    
  loginUser(){
   console.log( this.props.loginUser );
  }

  loginAdmin(){

  }  

  render() {
    return (   
        <div className="container">     
            <div className="row">
                <div className="col-lg-4 col-sm-12 col-xs-12">
                    <div className="card">
                        <img className="card-img-top" src={wallet} alt={wallet} />
                        <div className="card-block">
                            <h4 className="card-title">Gestión de wallet</h4>
                            <p className="card-text">Utilice esta app como su billetera personal y administre su dinero.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 col-xs-12">
                    <div className="card">
                        <div className="card-header">
                            Login
                        </div>
                        <div className="card-block">
                            <form action="">
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="email" required/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="*****" required/>  
                                </div>
                                <a className="btn btn-primary">Admin login</a>  
                            </form>                                                
                            <hr/>
                            <label>Si eres usuario inicia sesiòn con google</label>
                            <a className="btn btn-primary" onClick={this.loginUser}><i className="fa fa-google" aria-hidden="true"></i> Login with google</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 col-xs-12">
                    <div className="card">
                        <img className="card-img-top" src={history}  alt={history} />
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
