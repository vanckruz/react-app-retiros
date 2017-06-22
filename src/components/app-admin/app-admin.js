import React, { Component } from 'react'
import Nav from '../nav'
import './app-admin.css'

class AppAdmin extends Component {
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

            <div className="col-md-6 col-xs-12">
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
