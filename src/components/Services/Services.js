import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './Services.css';

import tiles from "../../images/services/006-tiles.png";
import pipes from "../../images/services/005-pipes.png";
import plug from "../../images/services/004-plug.png";
import brickwall from "../../images/services/003-brickwall.png";
import tools from "../../images/services/002-tools.png";
import paintroller from "../../images/services/001-art-painting-roller.png";
import star from "../../images/services/005-star.png";
import broom from "../../images/services/006-broom.png";

class Services extends Component {
  render() {
    return (
      <div>
        <Row className="contentServices">



          <Col className="erwartung" xs="12" sm="12" md="12" lg="12">
            <h4>Was können Sie erwarten?</h4>
            <p>
              Eine Ausführliche Beratung über die Realisierung ihres Projektes und eine kompetente Planung des Bauvorhabens.
            </p>
          </Col>

          <Col className="fliesen" xs="12" sm="12" md="6" lg="6">
            <img src={tiles} alt="tiles"/>
            <h4>Verlegung</h4>
            <p>
              Wir verlegen für Sie Fliesen-, Platten- und Mosaikbelägen von Klein- bis Großformat, sowie Natursteinbeläge und Treppenanlagen.
            </p>
          </Col>

          <Col className="mauerEstrich" xs="12" sm="12" md="6" lg="6">
            <img src={brickwall} alt="brickwall"/>
            <h4>Sanierung / Modernisierung und Umbauten</h4>
            <p>Sanierung, Modernisierung  und Umbauten werden von uns ebenfalls übernommen. </p>
          </Col>

          <Col className="sanitaer" xs="12" sm="12" md="6" lg="6">
            <img src={pipes} alt="pipes"/>
            <h4>Sanitär / Badplanung</h4>
            <p>Spezielle Badplanung für bestimmte individuelle Nutzungswünschen wie barrierefreie, behindertengerechte, seniorengerechte Bäder</p>


          </Col>

          {/*<Col className="elektro" xs="12" sm="12" md="6" lg="6">
            <img src={plug} alt="plug"/>
            <h4>Elektronik</h4>
            <p>Elektrokabel und Anschlüsse werden von einem Fachbetrieb verlegt. So sind Sie auf der sicheren Seite,
              denn die Elektrik in Ihrem neuen Bad ist auf dem neusten Stand und professionell nach den aktuellen Standards verbaut.</p>
          </Col>*/}

          <Col className="trockenbau" xs="12" sm="12" md="6" lg="6">
            <img src={tools} alt="tools"/>
            <h4>Reparaturarbeiten</h4>
            <p>Reparaturarbeiten jeglicher Art von Fliesen, Treppen, Naturstein bis Silikonfugen werden von uns erledigt. </p>
          </Col>

          <Col className="maler" xs="12" sm="12" md="6" lg="6">
            <img src={broom} alt="broom"/>
            <h4>Ausführung aller notwendigen Vorarbeiten</h4>
            <p>Abriss und Entsorgung von Bauschutt, Putz- und Estricharbeiten, Trockenbau- und Maurerarbeiten.
            </p>
          </Col>

          <Col className="spezial" xs="12" sm="12" md="6" lg="6">
            <img src={star} alt="star"/>
            <h4>Planung und Durchführung von Sonderlösungen</h4>
            <p>Sie haben spezielle Anforderungen? Kein Problem, wir haben die passenden Lösungen!
            </p>
          </Col>

          <Col className="ueberzeugung" xs="12" sm="12" md="12" lg="12">
            <h4>Überzeugen Sie sich selbst.</h4>
            <p>
              Überzeugen Sie sich bei Ihrem nächsten Bauvorhaben von meiner fachlich sauber ausgeführten Handwerksarbeit.
              <br/>
              Gerne berate ich Sie und erstelle ein unverbindliches Angebot.
              <br/>
              Ich freue mich auf Ihren Anruf
            </p>
          </Col>

        </Row>
      </div>
    );
  }
}

export default Services;
