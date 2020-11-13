import React from 'react';

export default function User({ details }) {
    if (!details) {
      return <h3>Working fetching your user&apos;s details...</h3>
    }
  
    return (
      <div className='user container'>
        <h2>{details.Name}</h2>
        <h3>{details.Size}</h3>
       
  
      </div>
    )
  }