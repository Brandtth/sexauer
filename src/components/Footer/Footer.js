import React, { Component } from 'react';
import './Footer.css';
import { Row, Col } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <div>
        <h1>Footer</h1>

          <Row className="footer">

              <Col xs="12" sm="3">
                  <h4>Information</h4>
                  <ul>
                      <li>Impressum</li>
                      <li>Datenschutz</li>
                  </ul>
              </Col>

              <Col xs="12" sm="3">
                  <h4>Follow Us</h4>
                  <ul>
                      <li>Facebook</li>
                      <li>Google+</li>
                  </ul>
              </Col>

            <Col xs="12" sm="3">
                  <h4>Rufen Sie uns jetzt an</h4>
                  <ul>
                      <li>(07667)987654321</li>
                      <li>(0175)1122556644</li>
                  </ul>
              </Col>

              <Col xs="12" sm="3">
                  <h4>Mail-Adresse</h4>
                  <ul>
                      <li>info@Fliesen-Sexauer.de</li>
                  </ul>
              </Col>
          </Row>
      </div>
    );
  }
}

export default Footer;
