import React from 'react';

const Person = (props) => {
    return (
    <div>    
        <p>{props.number}. I'm {props.name} and I am {props.age}!</p>
        <p>{props.children}</p>
    </div>
    )
};

export default Person;