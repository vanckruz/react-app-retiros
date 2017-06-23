import React, { Component } from 'react'
import AppUnlogged from './components/app-unlogged/app-unlogged'
import AppLogged from './components/app-logged/app-logged'
import AppAdmin from './components/app-admin/app-admin'
import firebase from 'firebase'
import './App.css'

class App extends Component {

  constructor(...props){
    super(...props)
    this.state = {
      wallet: null,
      user: null,
      userLoggedIn: false,
      AdminLoggedIn: false,
      admin: null
    }

    this.handleLoginUser = this.handleLoginUser.bind(this);
    this.handleLoginAdmin = this.handleLoginAdmin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount(){
    if(localStorage.getItem('user')){
      if(JSON.parse(localStorage.getItem('user')).tipo === 'user' ){
        this.setState({
          user: JSON.parse(localStorage.getItem('user')).email,          
          userLoggedIn: true
        })
      }else if(JSON.parse(localStorage.getItem('user')).tipo === 'admin' ){
        this.setState({
          admin: JSON.parse(localStorage.getItem('user')).email,
          AdminLoggedIn: true
        })
      }
    }
  }

  handleLoginUser(){
    let provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => {
        console.log(result.user.email, result.user)    
        localStorage.setItem('user', JSON.stringify({tipo: 'user', email: result.user.email}))
        this.setState({
          user: result.user.email,
          userLoggedIn: true
        })
      } )
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    
  }

  handleLoginAdmin(email, pw){
    firebase.auth().signInWithEmailAndPassword(email, pw)      
    .then(result => {
      console.log("admin logged")
      localStorage.setItem('user', JSON.stringify({tipo: 'admin', email: result.user.email}))
      this.setState({
        admin: result.email,
        AdminLoggedIn: true
      })
    })
    .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleLogout(){
    firebase.auth().signOut()
      .then(result => {
        console.log(`${result.user.email} ha iniciado sesión`)
        localStorage.removeItem('user')
      })
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    
  }

  render() {    
    if (this.state.userLoggedIn) {
      return <AppLogged wallet={this.state.wallet} user={this.state.user} logout={this.handleLogout} />
    }else if(this.state.adminLoggedIn){
      return <AppAdmin user={this.state.admin} logout={this.handleLogout} />
    }

    return <AppUnlogged login={this.handleLoginUser} admin={this.handleLoginAdmin} />
  }
}

export default App
