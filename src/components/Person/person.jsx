import React, { Component } from 'react';

const Person = (props) => {
    return ( <div>I'm just a {props.name} and I'm {props.age}. I'll say it again loud and clear - {props.children}</div> );
}
 
export default Person;