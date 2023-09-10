import React from 'react';
import "./itemlistcontainer.css"

function ItemListContainer(props) {
  return (
    <div className='welcomee'>
      <h1>{props.greeting}</h1>
    </div>
  );
}

export default ItemListContainer;