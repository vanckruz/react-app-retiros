import React, { Component } from 'react'
import Header from './components/header/header'
import Login from './components/login/login'
import Autor from './components/autor/autor'
import Footer from './components/footer/footer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Login />
        <Autor />
        <Footer />
      </div>
    );
  }
}

export default App
