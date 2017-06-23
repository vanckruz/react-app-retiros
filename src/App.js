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
      if( localStorage.getItem('user') ){
        this.setState({
          user: JSON.parse(localStorage.getItem('user')).email,          
          userLoggedIn: true
        })
      }
      
      if( localStorage.getItem('admin') ){
        console.log("tree")
        this.setState({
          admin: localStorage.getItem('admin'),
          AdminLoggedIn: true
        })
      }
  }

  handleLoginUser(){
    let provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => {
        localStorage.setItem('user', result.user.email)
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
      console.log("admin logged", result.email)
      localStorage.setItem('admin', result.email)
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
        localStorage.removeItem('user')
        localStorage.removeItem('admin')        
        this.setState({
          admin: null,
          user: null,
          userLoggedIn: false,
          AdminLoggedIn: false
        })        
      })
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    
  }

  render() {    
    if (this.state.userLoggedIn) {
      return <AppLogged wallet={this.state.wallet} user={this.state.user} logout={this.handleLogout} />
    }else if(this.state.AdminLoggedIn){
      return <AppAdmin user={this.state.admin} logout={this.handleLogout} />
    }

    return <AppUnlogged login={this.handleLoginUser} admin={this.handleLoginAdmin} />
  }
}

export default App
