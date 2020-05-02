import React, { Component } from 'react';

class Animal extends Component{
    render(){
    return (<p>Animal name is : {this.props.name}</p>)
    };
}

export default Animal;