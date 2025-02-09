import React, { useContext } from 'react'
import './NavLinks.css'

import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/auth-context'

function NavLinks() {

  const auth = useContext(AuthContext);

  return (
    <ul className='nav-links'>
      <li>
        <NavLink to='/' exact="true">All Users</NavLink>
      </li>
      {auth.isLoggedIn && <li>
        <NavLink to={`/${auth.userId}/places`}>My Places</NavLink>
      </li>}
      {auth.isLoggedIn && <li>
        <NavLink to='/places/new'>Add Place</NavLink>
      </li>}
      {!auth.isLoggedIn && <li>
        <NavLink to='/auth'>Authenticate</NavLink>
      </li>}
      {auth.isLoggedIn && (
        <button onClick={auth.logout}>LOGOUT</button>
      )}
    </ul>
  )
}

export default NavLinks;