import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import  myImage  from '../../images/SpaceX-Logo-White.svg';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavLine,
  NavImg,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './Navbar.elements';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
          
            <NavLogo to='/' onClick={closeMobileMenu}>
              <NavImg src={myImage} />
              
            </NavLogo>
            
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  MISSION & VISSION
                  <NavLine/>
                </NavLinks>
              
              </NavItem>

              <NavItem>
                <NavLinks to='/services' onClick={closeMobileMenu}>
                  PROJETS
                  <NavLine/>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/products' onClick={closeMobileMenu}>
                  EQUIPE
                  <NavLine/>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/products' onClick={closeMobileMenu}>
                  CONTACT
                </NavLinks>
              </NavItem>
            
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
