import React from 'react';
import "./Button.css";
function Button(props){
  return (
    <button className='nav-btn'>{props.text}</button>
  )
}

export default Button;