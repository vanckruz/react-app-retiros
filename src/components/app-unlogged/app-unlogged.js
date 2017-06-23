import React, { Component } from 'react'
import Header from '../../components/header/header'
import Login from '../../components/login/login'
import Autor from '../../components/autor/autor'
import Footer from '../../components/footer/footer'
import './app-unlogged.css'

class AppUnlogged extends Component {
  constructor(props){
    super(...props)
    this.state = {}

    this.loginGoogle = this.loginGoogle.bind(this);
    this.loginAdmin = this.loginAdmin.bind(this);    
  }

  loginGoogle(){
    this.props.login()
  }

  loginAdmin(user, pass){
    console.log(user, pass)
    this.props.admin(user, pass)
  }

  render() {

    return (
      <div>
        <Header />
        <Login loginUser={this.loginGoogle} admin={this.loginAdmin}/>
        <Autor />
        <Footer />
      </div>
    );
  }
}

export default AppUnlogged
