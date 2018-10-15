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

            <h3>Herzlich willkommen!</h3>
            <h4>Suchen Sie einen Fliesenleger in der Kaiserstuhlregion?</h4>
            <p>
              Als Geschäftsinhaber kann ich auf eine langjährige Berufserfahrung als Fliesen-, Platten- und Mosaikleger zurückblicken.
              <br/>
              Mein Aufgabengebiet umfasst alle Fliesen-, Naturstein-, Estricharbeiten sowie Trockenbau.
              <br/>
              Von der Kleinstreparatur über Komplettbad bis hin zu Altbausanierung oder Umbau führe ich alle Arbeiten aus.
              <br/>
              Wichtig ist dabei für mich eine kompetente Fachberatung, fachgerechte und präzise Ausführung aller Arbeiten sowie Kreativität, Pünktlichkeit und Sauberkeit.
            </p>
          </Col>
          <Col className="contentQuestionPlus" xs="12" sm="12" md="12" lg="12">
            Gerne können Sie mit uns einen Termin vereinbaren, damit wir Sie kompetent zu Ihrem Projekt beraten können.
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
            <p>Mit Ihnen zusammen planen wir Ihr Bauvorhaben.</p>


          </Col>

          <Col className="coordination" xs="12" sm="12" md="3" lg="3">
            <img src={coordination} alt="coordination"/>
            <h4>Koordination</h4>
            <p>Falls andere Gewerke für die Umsetzung benötigt werden, organisieren und koordinieren wir die Zusammenarbeit mit anderen Firmen.</p>


          </Col>

          <Col className="realization" xs="12" sm="12" md="3" lg="3">
            <img src={realization} alt="realization"/>
            <h4>Realisierung</h4>
            <p>Wir setzen Ihre Wünsche nach gemeinsamer Planung fachgerecht und sauber um. </p>
          </Col>
        </Row>

        <br/>
        <br/>

        <Col className="homeEnd" xs="12" sm="12" md="12" lg="12">
          <h3>Ihr Fliesenleger aus Ihringen</h3>
          <h5>Thomas Sexauer </h5>
          <img src={worker} alt="worker" className="worker"/>
        </Col>
      </div>
    );
  }
}

export default Home;
