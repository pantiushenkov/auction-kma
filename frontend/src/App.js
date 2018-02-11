import React, { Component } from 'react';
import './App.css';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import config from './config'

class App extends Component {
  state = {
    input: '',
    greeting: ''
  }

  componentDidMount(){
    var socket = new SockJS(config.apiServerAddress);
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, (frame) => {
        // setConnected(true);
        // console.log('Connected: ' + frame);
        this.stompClient.subscribe('/topic/greetings',(greeting)=> {
          var content = JSON.parse(greeting.body).content;
          this.setState({greeting:content})
        });
    });
  }

  onChange = event => {
    this.setState({input: event.target.value})
  }

  onSubmit = () => {
    this.stompClient.send("/hello", {}, JSON.stringify(this.state.input));
  }

  render() {
    return (
      <div>
        <div>{this.state.greeting}</div>
        <input type="text" 
               onChange={this.onChange}
               placeholder='Enter your name'/>
        <button onClick={this.onSubmit}>
          submit
        </button>
      </div>
    );
  }
}

export default App;
