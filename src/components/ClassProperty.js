import React, {Component, } from 'react';

class ClassProperty extends Component{
    render(){
        return <h1> Link to  :  {this.props.name} definition :  {this.props.definition}</h1>
    }
}

export default ClassProperty;