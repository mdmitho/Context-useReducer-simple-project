import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div className='bg-primary rounded-xl my-2'>
            <div className="navbar  text-white   " >

  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/topRated">TopRated</Link></li>
      <li><Link to="/cart">Cart</Link></li>
      
    </ul>
  </div>
</div>
        </div>
    );
}

export default Navbar;