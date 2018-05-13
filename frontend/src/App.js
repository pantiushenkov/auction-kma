import React, { Component } from 'react'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'

import './App.css'
import config from './config'
import { Root } from './root'
import { configureStore, history } from './store/configureStore'

const store = configureStore()

class App extends Component {
  state = {
    input: '',
  }

  componentDidMount() {
    const socket = new SockJS(config.apiServerAddress)
    this.stompClient = Stomp.over(socket)
    this.stompClient.connect({}, () => {
      // setConnected(true);
      // console.log('Connected: ' + frame);
      this.stompClient.subscribe('/login', (greeting) => {
        const content = JSON.parse(greeting.body)
        console.log(content)
      })
    })
  }

  onSubmit = () => {
    this.stompClient.send('/hello', {}, JSON.stringify(this.state.input))
  }

  render() {
    return (
      <Root store={store} history={history} />
    )
  }
}

export default App
