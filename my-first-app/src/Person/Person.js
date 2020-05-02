import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm a {props.name} -  I'm {props.age} year old - test {test()}</p>
            <p>{props.children}</p>
        </div>
    );
}
 
const test = () =>  Math.floor(Math.random() * 10);


export default person;