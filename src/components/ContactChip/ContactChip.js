import React from 'react';
import './style.css';

export function ContactChip(props){
    return (
        <div className="chip">
            <img src={props.image} width={96} height={96} alt="Patient"/>
            {props.fullname}
        </div>
    )
};