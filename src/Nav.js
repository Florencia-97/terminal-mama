import React from 'react';
import './App.css'
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <nav className="nav-per">
            <ul className="nav-links">
                <Link to="/expensas">
                    <li>Expensas</li>
                </Link>
                <Link to="/">
                    <li>Mes</li>
                </Link>
            </ul>
        </nav>
    )
  }
  
  export default Nav;