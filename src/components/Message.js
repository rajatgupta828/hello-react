import React,{Component,  } from 'react';

class Message extends Component{

    /* The initialization of state is done Here, we call super method within the
    constructor method, required as we call React component class and a call has to
    be made to base constructor */

    constructor(){
        super()
        this.state = {
            message: "Message.js --> Welcome Visitor"
        }
    }

    changeMessage(){
        this.setState({
            message: "Message.js --> Thankyou For subscribing"
        })
    }
    render(){
       return (
           <div>
                <h1> {this.state.message} </h1>
                <button onClick={() => this.changeMessage()}> Subscribe </button>
           </div>
       )
    }
}

export default Message;