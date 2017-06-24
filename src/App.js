import React, { Component } from 'react'
import AppUnlogged from './components/app-unlogged/app-unlogged'
import AppLogged from './components/app-logged/app-logged'
import AppAdmin from './components/app-admin/app-admin'
import firebase from 'firebase'
import uuid from 'uuid'
import swal from 'sweetalert'
import './App.css'


class App extends Component {

  constructor(...props){
    super(...props)
    this.state = {
      wallet: null,
      user: null,
      userLoggedIn: false,
      adminLoggedIn: false,
      admin: null,
      adminData: []
    }
    this.handleLoginUser = this.handleLoginUser.bind(this)
    this.handleLoginAdmin = this.handleLoginAdmin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentWillMount(){
      if( JSON.parse(localStorage.getItem('user')) ){
       
        this.setState({user: JSON.parse(localStorage.getItem('user')), userLoggedIn: true})

        const db = firebase.database().ref().child("wallet")
        const userData = db.child(JSON.parse(localStorage.getItem('user')).uid )
        userData.on('value', (snapshot) => {
          this.setState({wallet: snapshot.val()})  
        })                                                

      }
      
      if( JSON.parse(localStorage.getItem('admin')) ){

        this.setState({admin: JSON.parse(localStorage.getItem('admin')),AdminLoggedIn: true })
        this.db.on('value', (snapshot) => {
          this.setState({adminData: snapshot.val()})        
          console.log("aja uno nuevo", snapshot.val())
        })           
      }
  }

  handleDeposito(montoDeposito){
      const db = firebase.database().ref().child("wallet")          
      const userData = db.child(JSON.parse(localStorage.getItem('user')).uid )
      userData.child("depositos").child(uuid.v4()).set({monto: montoDeposito, fecha: new Date().toLocaleDateString()})                                
      userData.child("totales").child(uuid.v4()).set({ totalCuenta : 30, totalRetirado: 10})   
      swal("Su deposito sera procesado con el admin en breves momentos")        
  }

  handleRetiro(MontoRetiro){
      const db = firebase.database().ref().child("wallet")          
    
      const userData = db.child(JSON.parse(localStorage.getItem('user')).uid )    
      userData.child("retiro").child(uuid.v4()).set({ monto: 10, fecha: new Date().toLocaleDateString()})                                        
      userData.child("totales").child(uuid.v4()).set({ totalCuenta : 30, totalRetirado: 10}) 
      swal("Su retiro sera procesado con el admin en breves momentos")  
  }

  handleLoginUser(){
    let provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => {
        localStorage.setItem('user', JSON.stringify(result.user))
        this.setState({user: result.user, userLoggedIn: true})   
      } )
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    
  }

  handleLoginAdmin(email, pw){
    firebase.auth().signInWithEmailAndPassword(email, pw)      
    .then(result => {
      localStorage.setItem('admin', JSON.stringify(result))
      this.setState({admin: result, adminLoggedIn: true})
    })
    .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleLogout(){
    firebase.auth().signOut()
      .then(result => {
        localStorage.removeItem('user')
        localStorage.removeItem('admin')        
        this.setState({
          admin: null,
          user: null,
          userLoggedIn: false,
          adminLoggedIn: false
        })        
      })
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    
  }

  wallet(){
    return this.state.wallet
  }
  render() {    
    if (this.state.userLoggedIn) {
      return <AppLogged 
      wallet={this.state.wallet} 
      user={this.state.user} 
      logout={this.handleLogout} 
      deposito={this.handleDeposito} 
      retiro={this.handleRetiro}
    />
    }else if(this.state.adminLoggedIn){
      return <AppAdmin wallet={this.state.adminData} user={this.state.admin} logout={this.handleLogout} />
    }

    return <AppUnlogged login={this.handleLoginUser} admin={this.handleLoginAdmin} />
  }
}

export default App
