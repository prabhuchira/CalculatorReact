import React from 'react';
import './Header.css';


const header = (props)=>{
    return(
        <div className="Header">
            {props.main}<span id="subhead"> {props.sub} </span>
        </div>
    )
}

export default header;