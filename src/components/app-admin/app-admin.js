import React, { Component } from 'react'
import Nav from '../nav'
import './app-admin.css'

class AppAdmin extends Component {
  constructor(...props){
    super(...props)
    this.state = {
      wallet : {}
    }

    this.handleLogout = this.handleLogout.bind(this)    
  }

  handleLogout(e){
    e.preventDefault()
    this.props.logout()
  }

  render() {
    return (
      <div>
        <Nav />
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
            
                <h3>Depositos</h3>
                <ul className="list-group">
                  
                  <li className="list-group-item justify-content-between">
                    Cras justo odio
                    <span>
                      <button className="btn btn-primary"><i className="fa fa-check" aria-hidden="true"></i></button>
                      <button className="btn btn-danger"><i className="fa fa-ban" aria-hidden="true"></i></button>                    
                    </span>
                  </li>

                </ul>            

            </div>

            <div className="col-md-4 col-xs-12">
                <h3>Retiros</h3>
                <ul className="list-group">

                  <li className="list-group-item justify-content-between">
                    Cras justo odio
                    <span>
                      <button className="btn btn-primary"><i className="fa fa-check" aria-hidden="true"></i></button>
                      <button className="btn btn-danger"><i className="fa fa-ban" aria-hidden="true"></i></button>                      
                    </span>
                  </li>

                </ul>      
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppAdmin
