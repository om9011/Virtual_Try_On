import React from 'react';
import "./company.css";
const Company = (props) => {
  return (
    <>
      <img className='company' src={props.link} alt='' />
    </>
  )
}

export default Company