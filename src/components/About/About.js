import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import './About.css';



import worker from "../../images/handwerker.png";

class About extends Component {
  render() {
    return (
      <div className="aboutUs">
        <h1>Über uns</h1>

        <Row>

          <Col className="aboutStart" xs="12" sm="12" md="12" lg="12">
            <img src={worker} alt="worker" className="worker"/>
          </Col>

          <Col className="aboutStart" xs="12" sm="12" md="12" lg="12">
            <h2>Fliesen-Sexauer</h2>
            <p className="aboutContent">
              Als Geschäftsinhaber kann ich auf eine langjährige Berufserfahrung als Fliesen-, Platten- und Mosaikleger zurückblicken.
              <br/>
              <br/>
              Mein Aufgabengebiet umfasst alle Fliesen-, Naturstein-, Estricharbeiten sowie Trockenbau.
              <br/>
              <br/>
              Von der Kleinstreparatur über Komplettbad bis hin zu Altbausanierung oder Umbau führe ich alle Arbeiten aus.
              <br/>
              <br/>
              Wichtig ist dabei für mich eine kompetente Fachberatung, fachgerechte und präzise Ausführung aller Arbeiten sowie Kreativität, Pünktlichkeit und Sauberkeit
            </p>
          </Col>

        </Row>


      </div>
    );
  }
}

export default About;
