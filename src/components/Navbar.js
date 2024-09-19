import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">E-Shop</Link>
        <div className="ml-auto">
          <Link to="/cart" className="btn btn-outline-light">
            Cart <span className="badge badge-pill badge-light">{cartItems.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
