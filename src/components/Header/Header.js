import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Media} from 'reactstrap';
import { Icon } from 'react-icons-kit'
import {location2} from 'react-icons-kit/icomoon/location2';
import {phone} from 'react-icons-kit/icomoon/phone';
import {mail} from 'react-icons-kit/icomoon/mail'



import './Header.css';
import Logo from "../../images/Logo.PNG";

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
                      <NavbarBrand href="/" className="mr-auto">
                          <Media src={Logo} className="logo" alt="image"/>
                      </NavbarBrand>
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
                  <Row className="header-contact">

                      <Col xs="12" sm="12" md={{ size: 3, offset: 0 }} lg={{size: 2, offset:0}}>
                          <Icon icon={phone}/> Telefon
                          <ul>
                              <li>(07668) 996687</li>
                              <li>(0171) 5741254</li>
                          </ul>
                      </Col>

                      <Col xs="12" sm="12" md="3" lg="2">
                          <Icon icon={location2}/> Adresse
                          <ul>
                              <li>Im Westengarten 18</li>
                              <li>79241 Ihringen</li>
                          </ul>
                      </Col>

                      <Col xs="12" sm="12" md="4" lg="2">
                          <Icon icon={mail}/> E-Mail
                          <ul>
                              <a
                                  href="mailto:fliesen.sexauer@gmail.com?Subject=Hello%20again"
                                  target="_top" className="mail">
                                  fliesen.sexauer@gmail.com
                              </a>
                          </ul>
                      </Col>
                  </Row>
                  <hr/>
              </div>
          );
  }
}

export default Header;
