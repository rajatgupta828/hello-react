import { Component } from "react";
import React from 'react';

class ClassClick extends Component{

    clickHandler(){
        console.log("Click Handler in class")
    }

    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>ClassClick</button>
            </div>
        )
    }
}

export default ClassClick;