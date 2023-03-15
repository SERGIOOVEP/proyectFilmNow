
import React, { useState } from 'react';
import filmNomNav from '../../image/filmnowNav.png'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
  MDBInputGroup,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function NavBar() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <div className='divNavImage'>
        <MDBNavbarBrand href='/'><img src={filmNomNav}/></MDBNavbarBrand>
        </div>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            <MDBNavbarLink active aria-current='page' href='/'>
              Home
            </MDBNavbarLink>
            <MDBNavbarLink href='/home/register'>Register</MDBNavbarLink>
            <MDBNavbarLink href='/home'>Login</MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
        <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
          <input className='form-control' placeholder="Search Movie" aria-label="Search" type='Search' />
          <MDBBtn outline>Search</MDBBtn>
        </MDBInputGroup>
      </MDBContainer>
    </MDBNavbar>
  );
}