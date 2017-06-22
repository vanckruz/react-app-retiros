import React, { Component } from 'react'
import _404 from './_404.jpg'
import './404.css'

class NotFound extends Component {

  render() {
    return (
    <div className="_404">
        <img src={_404} alt={_404} />
    </div>
    )
  }
}

export default NotFound
