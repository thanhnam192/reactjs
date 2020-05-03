import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm a {props.name} -  I'm {props.age} year old - test {test()}</p>
            <p>{props.children}</p>
            <input onChange={props.changed} />
        </div>
    );
}
 
const test = () =>  Math.floor(Math.random() * 10);


export default person;