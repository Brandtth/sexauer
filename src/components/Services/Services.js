import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './Services.css';

import tiles from "../../images/services/006-tiles.png";
import pipes from "../../images/services/005-pipes.png";
import plug from "../../images/services/004-plug.png";
import brickwall from "../../images/services/003-brickwall.png";
import tools from "../../images/services/002-tools.png";
import paintroller from "../../images/services/001-art-painting-roller.png";

class Services extends Component {
  render() {
    return (
      <div>
        <Row className="contentServices">
          <Col className="fliesen" xs="12" sm="12" md="6" lg="6">
            <img src={tiles} alt="tiles"/>
            <h4>Fliesen</h4>
            <p>Wir verlegen für Sie jegliche Art von Fliesen. Spezialisiert haben wir uns auf Großformatfliesen. Diese vermitteln ein edles und modernes Design. </p>

          </Col>

          <Col className="sanitaer" xs="12" sm="12" md="6" lg="6">
            <img src={pipes} alt="pipes"/>
            <h4>Sanitär</h4>
            <p>Der Anschluss Ihrer neuen Sanitäranlagen erfolgt fachgerecht durch einen unserer Partner.</p>


          </Col>

          <Col className="elektro" xs="12" sm="12" md="6" lg="6">
            <img src={plug} alt="plug"/>
            <h4>Elektronik</h4>
            <p>Elektrokabel und Anschlüsse werden von einem Fachbetrieb verlegt. So sind Sie auf der sicheren Seite,
              denn die Elektrik in Ihrem neuen Bad ist auf dem neusten Stand und professionell nach den aktuellen Standards verbaut.</p>


          </Col>

          <Col className="mauerEstrich" xs="12" sm="12" md="6" lg="6">
            <img src={brickwall} alt="brickwall"/>
            <h4>Mauerer / Estrich</h4>
            <p>Maurer- und Estricharbeiten werden von uns mit Hilfe unserer Sub-Unternehmer ebenfalls übernommen. </p>
          </Col>

          <Col className="trockenbau" xs="12" sm="12" md="6" lg="6">
            <img src={tools} alt="tools"/>
            <h4>Trockenbau</h4>
            <p>Durch neue Trockenbau-Wände verleihen Sie Ihrem Projekt neue Formen. Somit können einzigartige Räume geschaffen werden. </p>
          </Col>

          <Col className="maler" xs="12" sm="12" md="6" lg="6">
            <img src={paintroller} alt="paintroller"/>
            <h4>Maler</h4>
            <p>Verschiedene Farben lassen Ihr Projekt noch einladener aussehen, deswegen übernehmen wir gerne auch alle anfallenden Malerarbeiten.</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Services;
