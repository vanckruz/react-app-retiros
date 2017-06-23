import React, { Component } from 'react'
import firebase from 'firebase'
import Nav from '../nav'
import './app-logged.css'

class AppLogged extends Component {
  constructor(...props){
    super(...props)
    this.state = {
      user: null,
      wallet : null
    }
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentWillMount(){

  }

  handleLogout(e){
    e.preventDefault()
    this.props.logout()
  }
  
  render() {
    console.log(this.props.user)
    return (
      <div>
        <Nav nombre={this.props.user}/>
        <div className="container">
          <div className="row">
            
            <div className="col-md-4">  
                <div className="list-group">
                  <a className="list-group-item active">
                    {this.props.user}
                  </a>
                  <a className="list-group-item list-group-item-action" onClick={this.handleLogout}>Cerrar sesión</a>
                </div>              
            </div>

            <div className="col-md-4 col-xs-12">
              <h2>Depositar</h2>
              <hr/>
              <form>
                  <div className="form-group">
                    <label htmlFor="monto">Monto</label>
                    <input type="text" className="form-control"/>
                  </div>
                  <input className="btn btn-primary" type="submit" value="depositar"/>
              </form>
            </div>
            <div className="col-md-4 col-xs-12">
              <h2>Retirar</h2>
              <hr/>
              <form>
                  <div className="form-group">
                    <label htmlFor="monto">Monto</label>
                    <input type="text" className="form-control"/>
                  </div>
                  <input className="btn btn-primary" type="submit" value="retirar"/>                
              </form>              
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-xs-12">
              <div className="card">
                <h3 className="card-header">Total depositado</h3>
                <div className="card-block">
                  <table className="table" >
                    <thead>
                      <tr className="table-info">
                        <th>Depositado</th>
                        <th>Retirado</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>$  </th>
                        <td>$  </td>
                      </tr>
                    </tbody>
                  </table>                  
                </div>
              </div>              
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-12">
              <h2  className="text-center">Operaciones</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppLogged
