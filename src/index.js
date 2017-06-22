import React from 'react'
import { render } from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import firebase from 'firebase'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

firebase.initializeApp({
  apiKey: "AIzaSyDsFwUbsOZGPDXtLgZ-fkS2OFAvsgE2YoM",
  authDomain: "wallet-1bbd5.firebaseapp.com",
  databaseURL: "https://wallet-1bbd5.firebaseio.com",
  projectId: "wallet-1bbd5",
  storageBucket: "wallet-1bbd5.appspot.com",
  messagingSenderId: "715205627613"
})

render(<App />, document.getElementById('root'))
registerServiceWorker()
