import React from 'react';
import './Person.css'
import styled from 'styled-components';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)' : {
            width : '450px'
        }
    };

    const StyledDiv = styled.div`
    width: 60%;
    margin: auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width : 450px;
      }
    `;

    return (
        <StyledDiv>
            <p onClick={props.click}>I'm a {props.name} -  I'm {props.age} year old - test {test()}</p>
            <p>{props.children}</p>
            <input onChange={props.changed} value={props.name} />
        </StyledDiv>
    );
}
 
const test = () =>  Math.floor(Math.random() * 10);


export default person;