import React, { Component } from 'react';
import { Media } from 'reactstrap';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>

          <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />

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

      </div>
    );
  }
}

export default Header;
