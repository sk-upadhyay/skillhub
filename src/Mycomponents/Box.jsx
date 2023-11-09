import React from 'react'
import './Box.css';

export default function Box(prop1) {
  return (
    <div className="container">
    <div className="image-container">
      <img src={prop1.url} alt={prop1.title} />
    </div>
    <div className="content-container">
      <p>{prop1.title}</p>
    </div>
  </div>
  )
};
