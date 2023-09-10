import React from 'react';
import './cartwidget.css'

function CartWidget() {

  const cartItemCount = 0;

  return (
    <div className='ubileft'>
      <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
      <span className="cart-item-count">({cartItemCount})</span>
    </div>
  );
}

export default CartWidget;
