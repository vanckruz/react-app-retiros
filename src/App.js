import React, { Component } from 'react'
import AppUnlogged from './components/app-unlogged/app-unlogged'
import AppLogged from './components/app-logged/app-logged'
import AppAdmin from './components/app-admin/app-admin'
import NotFound from './components/404'
import firebase from 'firebase'
//import { Router, Switch, Route } from 'react-router-dom'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

class App extends Component {

  constructor(...props){
    super(...props)
    this.state = {
      wallet: {},
      user: {},
      admin: {}
    }

    this.handleLoginUser = this.handleLoginUser.bind(this);
    this.handleLoginAdmin = this.handleLoginAdmin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount(){
     /*
      const database = firebase.database().ref().child('object').child('name') 

      database.on('value', snapshot => {
        this.setState({
          name: snapshot.val()
        })
        console.log(snapshot)
      })
      */
    
  }

  handleLoginUser(){
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleLoginAdmin(){

  }

  handleLogout(){
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  render() {
    return (
    <Router>
      <Switch>
        <Route exact path="/" component={AppUnlogged} />
        <Route exact path="/wallet" component={AppLogged} />
        <Route exact path="/admin" component={AppAdmin} />  
        <Route component={NotFound} />                        
      </Switch>
    </Router>
    )
  }
}

export default App
