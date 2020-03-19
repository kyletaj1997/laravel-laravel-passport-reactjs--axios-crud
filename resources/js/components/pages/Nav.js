import React from 'react';
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <div>
                <ul>
                   <Link to='/'>
                    <li>Login</li>
                     </Link>
                     <Link to='/About'>
                     <li>About</li>
                      </Link>
                      <Link to='/Register'>
                      <li>Register</li>
                      </Link>
                  </ul>    
           
        </div>
    );
}

export default Nav;