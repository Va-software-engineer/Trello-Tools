import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav, NavItem, Popover, OverlayTrigger } from 'react-bootstrap';

class Header extends Component {
  popoverClick = (
    <Popover id="popover-trigger-click" title="About Trello">
      
    </Popover>
  );

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={`/`}>Trello</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          
        </Nav>
      </Navbar>
    )      
  }
}

export default Header;