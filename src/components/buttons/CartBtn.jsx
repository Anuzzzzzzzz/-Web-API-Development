import React from 'react';
import { NavLink } from 'react-router-dom';

const CartBtn = () => {
  return (
    <NavLink to="/cart" className="btn btn-outline-primary">
      <i className="fa fa-shopping-cart"></i> Cart
    </NavLink>
  );
}

export default CartBtn;
