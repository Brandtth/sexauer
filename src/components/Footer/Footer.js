import React, { Component } from 'react';
import './Footer.css';
import { Row, Col } from 'reactstrap';
import { Icon } from 'react-icons-kit';
import {googlePlus3} from 'react-icons-kit/icomoon/googlePlus3';
import {facebook} from 'react-icons-kit/icomoon/facebook';
import {whatsapp} from 'react-icons-kit/icomoon/whatsapp';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <h3>
          Sexauer
          <br/>
          Fliesen und Naturstein
        </h3>

          <Row>

              <Col xs="12" sm="12" md="4" lg="4">
                  <h4>Follow Us</h4>
                  <ul>
                      <li><Icon icon={facebook}/> Facebook</li>
                      <li><Icon icon={googlePlus3}/> Google+</li>
                      <li><Icon icon={whatsapp}/> WhatsApp</li>
                  </ul>
              </Col>

            <Col xs="12" sm="12" md="4" lg="4">
                  <h4>Rufen Sie uns jetzt an</h4>
                  <ul>
                      <li>(07667)987654321</li>
                      <li>(0175)1122556644</li>
                  </ul>
              </Col>

              <Col xs="12" sm="12" md="4" lg="4">
                  <h4>Mail-Adresse</h4>
                  <ul>
                      <li>
                        <a
                          href="mailto:fliesen.sexauer@gmail.com?Subject=Hello%20again"
                          target="_top" className="mailFooter">
                          fliesen.sexauer@gmail.com
                        </a>
                      </li>
                  </ul>
              </Col>
          </Row>
      </div>
    );
  }
}

export default Footer;
