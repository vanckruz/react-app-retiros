import React, { Component } from 'react'
import Nav from '../nav'
import './app-logged.css'

class AppLogged extends Component {
  constructor(...props){
    super(...props)
    this.state = {
      wallet : {}
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xs-12">
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
            <div className="col-md-6 col-xs-12">
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
