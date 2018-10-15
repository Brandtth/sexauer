import React, { Component } from 'react';
import './Contact.css';
import { Row, Col } from 'reactstrap';
import { Icon } from 'react-icons-kit'
import {location2} from 'react-icons-kit/icomoon/location2';
import {phone} from 'react-icons-kit/icomoon/phone';
import {mail} from 'react-icons-kit/icomoon/mail'
import MapGL, { Marker } from 'react-map-gl';

import markersymbol from "../../images/gps.png";


class Contact extends Component {

  render() {

    return (
      <div>
        <h1>Kontakt</h1>

        <Row className="contactSite">

          <Col xs="12" sm="12" md="12" lg="12">
            <Icon icon={phone}/> Telefon
            <ul>
              <li>(07668) 996687</li>
              <li>(0171) 5741254</li>
            </ul>
          </Col>

          <Col xs="12" sm="12" md="12" lg="12">
            <Icon icon={location2}/> Adresse
            <ul>
              <li>Im Westengarten 18</li>
              <li>79241 Ihringen</li>
            </ul>
          </Col>

          <Col xs="12" sm="12" md="12" lg="12">
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

        <MapGL
          width={700}
          height={450}
          latitude={48.045001}
          longitude={7.641509}
          zoom={13}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxApiAccessToken="pk.eyJ1IjoidGhpZXNiIiwiYSI6ImNqanI1d3N6YTBid2IzcHBlMXE1YWdzeGQifQ.cyWblHbJ0KT585aLOwb2yA"

        >
          <Marker latitude={48.045001} longitude={7.641509} offsetLeft={-20} offsetTop={-10}>
            <div className="marker">
              <img src={markersymbol} alt="marker"/>
            </div>
          </Marker>
        </MapGL>


      </div>
    );
  }
}

export default Contact;
