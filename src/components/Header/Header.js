import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import './Header.css';

class Header extends Component {
  constructor (props){
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {



    return (
      <div>
        <Navbar light expand="md" className="header">
          <NavbarBrand href="/" className="mr-auto">Sexauer</NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="mr-2" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/" data-hover="Home">Home</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/about" data-hover="About Us"> About Us </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/contact" data-hover="Contact"> Contact </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/references" data-hover="References"> References </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/services" data-hover="Services"> Services </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

      /*<div>

          <h2>Fliesen und Naturstein</h2>
          <h1>Sexauer</h1>
        <hr color="orange"/>

        <ul className="header">
          <li><a href="/" data-hover="Home"> Home </a></li>
          <li><a href="/about" data-hover="About Us"> About Us </a></li>
          <li><a href="/contact" data-hover="Contact"> Contact </a></li>
          <li><a href="/references" data-hover="References"> References </a></li>
          <li><a href="/services" data-hover="Services"> Services </a></li>
        </ul>

      </div>*/
    );
  }
}

export default Header;
