import React, { Component } from 'react';
import './App.css'
import {Link} from 'react-router-dom';
import { auth } from "./services/firebase"

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
          user: auth().currentUser
        };
      }

      render(){
        return(
            <nav className="nav-per">
                <ul className="nav-links">
                    { (this.state.user && this.state.user.email === "graciela.barone.ohf@gmail.com") ?
                    <Link to="/expensas">
                        <li>Expensas</li>
                    </Link> : <li>Locales</li>
                    }
                </ul>
            </nav>
        )
      }
  }
  
  export default Nav;