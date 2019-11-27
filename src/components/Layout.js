import React, { Component }from 'react';
import { withCookies } from 'react-cookie';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class Layout extends Component {
 
  state = {
    token: this.props.cookies.get('token')  
  }

  logout = event => {
    this.props.cookies.remove('token')
    // localStorage.clear();
    window.location.href = '/';
  }

  render() {
    if(!this.state.token){
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Reactstrap</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/register">Register</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );}else{
      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Reactstrap</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={this.logout}>Logout</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
      );
      
    }

  }
}

export default withCookies(Layout);