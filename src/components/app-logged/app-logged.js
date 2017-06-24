import React, { Component } from 'react'
import firebase from 'firebase'
import Nav from '../nav'
import './app-logged.css'
import JSONTree from 'react-json-tree'

class AppLogged extends Component {



  constructor(...props){
    super(...props)
    this.state = {
      userInfo: null,
      deposito: "",
      retiro: "",
      bodyDepositos: "",
      bodyRetiros: ""
    }

    this.handleLogout = this.handleLogout.bind(this)
    this.handleDeposito = this.handleDeposito.bind(this)
    this.handleRetiro = this.handleRetiro.bind(this)    
    
  }

  componentWillMount(){    
    
    this.setState( {
      userInfo: this.props.user
    })

  }

  handleDeposito(e){
    e.preventDefault()
    this.props.deposito(this.state.deposito)
    this.setState({deposito: ""})    
  }

  handleRetiro(e){
    e.preventDefault()
    this.props.retiro(this.state.retiro)
    this.setState({retiro: ""})    
  }

  handleLogout(e){
    e.preventDefault()
    this.props.logout()
  }

  valDeposito(e){
    e.preventDefault()     
    this.setState({deposito: e.target.value})
  }

  valRetiro(e){
    e.preventDefault()
    this.setState({retiro: e.target.value})
  }

  showRetiros(){
    /*
    if(this.props.wallet != null){
      const retiros = this.props.wallet.retiros
      
      let listaretiros = []
      for(let dep in retiros){
          console.log(retiros[dep])
          listaretiros.push(retiros[dep])
      }
      console.log(listaretiros)
      return listaretiros.map( index => {
        <tr>
          <td>{index.monto}</td>
          <td>{index.fecha}</td>
        </tr>
      })
    }
    return <tr><td>Cargando...</td></tr>
    */
    return new Promise( function(resolve, reject){
      const retiros = this.props.wallet.retiros
      
      let listaretiros = []
      for(let dep in retiros){
          listaretiros.push(retiros[dep])
      }

      resolve( 
          listaretiros.map( index => {
          <tr>
            <td>{index.monto}</td>
            <td>{index.fecha}</td>
          </tr>
        })   
      )

    })    
  }

  showDepositos(){
    const depositos = this.props.wallet.depositos
    const retiros = this.props.wallet.retiros
    
    let listaDepositos = []
    for(let dep in depositos){
        console.log(depositos[dep])
        listaDepositos.push(depositos[dep])
    }
    console.log(listaDepositos)

    return listaDepositos
  }

  render() {

    return (
      <div>
        <Nav nombre={this.state.userInfo.email}/>
        <div className="container">
          <div className="row">
            
            <div className="col-md-4">  
                <div className="list-group">
                  <a className="list-group-item active">
                    Menú
                  </a>
                  <a className="list-group-item list-group-item-action" onClick={this.handleLogout}>Cerrar sesión</a>
                </div>              
            </div>

            <div className="col-md-4 col-xs-12 bg-primary">
              <h2>Depositar</h2>
              <hr/>
              <form onSubmit={this.handleDeposito}>
                  <div className="form-group">
                    <label htmlFor="monto">Monto</label>
                    <input type="text" className="form-control" ref="retiro" name="deposito" id="deposito" onChange={this.valDeposito.bind(this)} value={this.state.deposito} />
                  </div>
                  <input className="btn btn-primary" type="submit"/>
              </form>
            </div>
            <div className="col-md-4 col-xs-12 bg-primary">
              <h2>Retirar</h2>
              <hr/>
              <form onSubmit={this.handleRetiro}>
                  <div className="form-group">
                    <label htmlFor="monto">Monto</label>
                    <input type="text" className="form-control" ref="retiro" name="retiro" id="retiro" onChange={this.valRetiro.bind(this)} value={this.state.retiro} />
                  </div>
                  <input className="btn btn-primary" type="submit" value="retirar"/>                
              </form>              
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-12">
              <div className="card">
                <h3 className="card-header bg-primary">Detalle de las operaciones</h3>
                <div className="card-block">
                  <div className="col-md-4 col-xs-12">
                    { 
                      (
                        this.props.wallet !== null 
                        ? 
                          <JSONTree data={this.props.wallet} />
                        :
                        <span>Sin operaciones...</span>
                      ) 
                    }
                  </div>
                </div>
              </div> 
            </div>
          </div>        
        </div>
      </div>
    );
  }
}

export default AppLogged
