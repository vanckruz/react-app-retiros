import React, { Component } from 'react'
import AppUnlogged from './components/app-unlogged/app-unlogged'
import AppLogged from './components/app-logged/app-logged'

import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <AppUnlogged />
      </div>
    );
  }
}

export default App
