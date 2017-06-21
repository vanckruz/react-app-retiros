import React, { Component } from 'react'
import Header from './components/header/header'
import Login from './components/login/login'
import './App.css'

class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <div className="container">
          <Login />
        </div>
      </div>
    );
  }
}

export default App
