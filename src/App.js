import React, { Component } from 'react'
import AppUnlogged from './components/app-unlogged/app-unlogged'
import AppLogged from './components/app-logged/app-logged'
import AppAdmin from './components/app-admin/app-admin'
import NotFound from './components/404'
import firebase from 'firebase'
import { render } from 'react-dom'
import { Redirect, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

class App extends Component {

  constructor(...props){
    super(...props)
    this.state = {
      wallet: {},
      user: null,
      admin: {}
    }

    this.handleLoginUser = this.handleLoginUser.bind(this);
    this.handleLoginAdmin = this.handleLoginAdmin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged( user => {
      this.setState({
        user
      })      
    })
    console.log(this.state.user)
  }

  handleLoginUser(){
    let provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => window.location.href = '/wallet' )
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    
  }

  handleLoginAdmin(email, pw){
    console.log(email, pw)
    firebase.auth().signInWithEmailAndPassword(email, pw)      
    .then(result => window.location.href = '/admin' )
    .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleLogout(){
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
      <Redirect to="/" />
  }


  render() {
    return (
    <Router>
      <Switch>
        <Route exact path='/' component={ () => <AppUnlogged login={this.handleLoginUser} admin={this.handleLoginAdmin}/>} />
        <Route exact path="/wallet" component={AppLogged} />
        <Route exact path="/admin" component={AppAdmin} />  
        <Route component={NotFound} />                        
      </Switch>
    </Router>
    )
  }
}

export default App
