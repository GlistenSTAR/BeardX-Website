import React from 'react';

import './card.css';

export default function Card(props) {
  return (
    <div className={`card ${props.backgroundColor ? props.backgroundColor : ''}`}>
      <div className='content'>
        <div className='title'>{props.title}</div>
        <div className='main_content'>{props.content}</div>
        <div className='sub_content'>{props.subContent}</div>
      </div>
      <div className='icon'>{props.icon}</div>
    </div>
  );
}
