import React, { Component } from 'react'
import MainPage from './MainPage'
import 'whatwg-fetch'

export default class App extends Component {

  constructor() {
    super()
    this.state = {}
  }

  onError( error ){
    console.log( error )
  }

  componentDidMount() {
    fetch('http://localhost:3000/posts')
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        console.log('parsed json', json)
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }

  render() {
    return (
      <MainPage/>
    )
  }
}
