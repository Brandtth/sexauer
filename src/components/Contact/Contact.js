import React, { Component } from 'react';
import './Contact.css';
import { Row, Col, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { Icon } from 'react-icons-kit'
import {location2} from 'react-icons-kit/icomoon/location2';
import {phone} from 'react-icons-kit/icomoon/phone';
import {mail} from 'react-icons-kit/icomoon/mail'

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 48.044936, lng: 7.641380 }}
  >
    <Marker
      position={{ lat: 48.044936, lng: 7.641380 }}
    />
  </GoogleMap>
));

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

        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />



      </div>
    );
  }
}

export default Contact;
