import React from 'react';


function Item(props){

      return (
    <div className='item'>
      <div className='dish'>
        <h3>{props.dish} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h3>
        <b>{props.price}</b></div>
        <p>{props.description}</p>
        <p>{props.spicy}</p>
    </div>

      );
    }

export default Item;