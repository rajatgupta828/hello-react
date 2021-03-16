import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { Component } from 'react';
import React from 'react';
import Welcome from './components/Welcome';
import Hello from './components/Hello'
import HelloJsx from './components/HelloJsx'
import GreetWithProps from './components/GreetWithProps';
import ClassProperty from './components/ClassProperty';
import Message from './components/Message';
import Counter from './components/Counter';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

class App extends Component {
  render(){
    return (
      <div className="App">
        {/* <Greet></Greet>
        <Welcome />
        <Hello />
        <HelloJsx /> */}
        {/* <GreetWithProps name = "Rajat" /> */}
        {/* Multiple properties can be recieved like below :  */}
        {/* <GreetWithProps name = "Rajat" emailId = "Rajatgupta828@gmail.com" /> */}

        {/*
        To recieve in children property, we can 
        */}
        {/* <GreetWithProps name = "Children Property" emailId = "ChildrenProperty@gmail.com">
          <p>This is the children property</p>
          <button> Children </button>
        </GreetWithProps> */}

        {/* To use class component with the properties , we can do that as below  */}
        {/* <ClassProperty name = "PropClass" definition = "Property in the class" /> */}

        {/* To use state , we have message.js written */}
        {/* <Message /> */}

        {/* Understand the setState method */}
        {/* <Counter /> */}

        {/* UnderStand Event handling using the click method */}
        <FunctionClick />
        <ClassClick />
        <EventBind />
      </div>
    );
  }
}

export default App;
