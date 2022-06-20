import React, { useState } from 'react';
import {IconContext} from 'react-icons/lib';
import { FaTimes, FaBars } from 'react-icons/fa'

import {  Nav,
          NavBarContainer,
          NavLogo,
          NavIcon,
          MobileIcon,
          NavMenu,
          NavItem,
          NavLinks } from './NavBar.elements'

const NavBar = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)

  return (
    <>
      <IconContext.Provider value={{color: '#fff'}}>
        <Nav>
          <NavBarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              <NavIcon />
              David
            </NavLogo>
            <MobileIcon
              onClick={handleClick}
            >
              { click ? <FaTimes /> : <FaBars /> }
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/'>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/about'>
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/works'>
                  Works
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/contact'>
                  Contact
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default NavBar