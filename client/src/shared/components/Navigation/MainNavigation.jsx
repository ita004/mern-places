import React, { useState } from 'react'
import MainHeader from './MainHeader'
import './MainNavigation.css'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'
import Backdrop from '../UIElements/Backdrop'

function MainNavigation() {

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  function openDrawerHandler(){
    setDrawerIsOpen(true);
  }

  function closeDrawerHandler(){
    setDrawerIsOpen(false);
  }

  return (
    <>
    { drawerIsOpen && <Backdrop onClick={closeDrawerHandler} /> }
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler} >
      <nav className='main-navigation__drawer-nav'>
        <NavLinks />
      </nav>
    </SideDrawer>
    <MainHeader>
      <button className='main-navigation__menu-btn' onClick={openDrawerHandler}>
        <span />
        <span />
        <span />
      </button>
      <h1 className='main-navigation__title'>
        <Link to='/'>YOUR PLACES</Link>
      </h1>
      <nav>
        <NavLinks />
      </nav>
    </MainHeader>
    </>
  )
}

export default MainNavigation;