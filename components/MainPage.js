import React, { Component } from 'react'

export default class MainPage extends Component {

  render() {
    return (
      <div>
        {this.props.title ? <div>Site title: {this.props.title}</div>: 'loading'}
      </div>
    )
  }
}
