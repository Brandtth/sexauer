import React, { Component } from 'react';
import { UncontrolledCarousel, Col, Row } from 'reactstrap';


import bathroom from "../../images/bathroom.jpeg";
import bathroomTwo from "../../images/bathroomTwo.jpg";
import kitchen from "../../images/kitchen.jpg";
import balcony from "../../images/balcony.jpg";

import realization from "../../images/001-hand-tool.png";
import coordination from "../../images/002-jigsaw.png";
import planing from "../../images/003-sketch.png";
import consulting from "../../images/004-business.png";

import worker from "../../images/handwerker.png";

import './Home.css';

const items = [
  {
    src: document.location.href + bathroom,
    altText: 'Slide 1',
    caption: 'nach Ihren Wünschen',
    header: 'Badezimmer'
  },
  {
    src: document.location.href + bathroomTwo,
    altText: 'Slide 2',
    caption: 'nach Ihren Wünschen',
    header: 'Badezimmer2'
  },
  {
    src: document.location.href + kitchen,
    altText: 'Slide 3',
    caption: 'nach Ihren Wünschen',
    header: 'Küche'
  },
  {
    src: document.location.href + balcony,
    altText: 'Slide 4',
    caption: 'nach Ihren Wünschen',
    header: 'Balkon'
  }
];

class Home extends Component {

  render() {
    return (

      <div className="home">
        <UncontrolledCarousel items={items} />
        <br/>
        <div className="parallax">
          <br/>
          <br/>
          <Col className="contentQuestion" xs="12" sm="12" md="12" lg="12">

            <h4>Suchen Sie einen Fliesenleger in der Kaiserstuhlregion?</h4>
            <p>Wir konnten bereits vielen Kunden Ihre Wünsche in Erfüllung gehen lassen und durch ein faires Preis/Leistungsverhältnis auch für den kleineren Geldbeutel erschwinglich machen.
              <br/>
              Unsere Fliesenleger besuchen regelmäßig Schulungen, um immer mit den neuesten Standards und Normen zu Arbeiten. Damit wir den Vorstellungen unsere Kunden gerecht werden können,
              setzten wir auf eine qualitativ hochwertige und saubere Ausführung.
              <br/>
              Durch das gute Zusammenspielen unseres Teams ist eine schnelle und saubere
              Umsetzung zu einem günstigen Preis möglich.
            </p>
          </Col>
          <Col className="contentQuestionPlus" xs="12" sm="12" md="12" lg="12">
            Gerne beraten wir Sie bei Ihnen Vor-Ort im Kaiserstühlerraum, um auch für Sie die perfekte Lösung zu finden.
            Natürlich können Sie sich auch gerne vorab telefonisch über unsere Preise informieren.
          </Col>
        </div>
        <br/>

        <div className="headService">
          <h2>Unser Service für Sie</h2>
          <h3>Alles aus einer Hand!</h3>
        </div>

        <Row className="contentService">
          <Col className="consulting" xs="12" sm="12" md="3" lg="3">
            <img src={consulting} alt="consulting"/>
            <h4>Beratung</h4>
            <p>Vereinbaren Sie mit uns einen Termin, damit wir Sie kompetent zu Ihrem Projekt beraten können. </p>

          </Col>

          <Col className="planing" xs="12" sm="12" md="3" lg="3">
            <img src={planing} alt="planing"/>
            <h4>Planung</h4>
            <p>Mit Ihnen zusammen planen wir Ihre neue Wohlfühloase in Ihrem Zuhause.</p>


          </Col>

          <Col className="coordination" xs="12" sm="12" md="3" lg="3">
            <img src={coordination} alt="coordination"/>
            <h4>Koordination</h4>
            <p>Falls andere Gewerke für die Umsetzung benötigt werden, koordinieren wir die Arbeiten für Sie. </p>


          </Col>

          <Col className="realization" xs="12" sm="12" md="3" lg="3">
            <img src={realization} alt="realization"/>
            <h4>Realisierung</h4>
            <p>Wir setzen Ihre Wünsche professionell und sauber um. </p>
          </Col>
        </Row>

        <br/>
        <br/>

        <Col className="homeEnd" xs="12" sm="12" md="12" lg="12">
          <h3>Ihr Fliesenleger aus Ihringen</h3>
          <h5>Fliesen-Sexauer</h5>
          <img src={worker} alt="worker" className="worker"/>
          <h5>
            "Wir von Fliesen-Sexauer machen Ihr Projekt zu
            <br/>
            unserem und setzen es mit voller Perfektion um."
          </h5>
        </Col>




      </div>
    );
  }
}

export default Home;
