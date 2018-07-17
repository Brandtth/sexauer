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
            <h2>Wer sind wir?</h2>
            <p className="aboutContent">
              Wir sind ein in zweiter Generation geführtes Familienunternehmen.
              Gegründet wurde dieses 1980 von meinem Vater und ich habe dieses im Jahr 2000 übernommen.

              Damit unsere Dienstleistungen fachgerecht,
              sauber und in höchster Qualität für Sie durchgeführt werden, setzen wir auf ein kleines,
              dafür bestens eingespieltes Team von Handwerkern und Fliesenlegern.
            </p>
          </Col>

          <Col className="aboutStart" xs="12" sm="12" md="12" lg="12">
            <h2>Was macht uns aus?</h2>
            <p className="aboutContent">
              Begeistert und fasziniert vom Fliesenhandwerk haben wir uns auf das Verlegen von Großformatfliesen spezialisiert.
              Denn große Fliesen werden immer häufiger in großen Räumen und Bädern eingesetzt,
              damit die Räume größer und edler wirken.

              Da in unseren Augen Kreativität im Fliesenhandwerk eine große Rolle spielt,
              ist dieses längst auch zu einer Kunst geworden. Daher koordinieren wir seit einigen Jahren auch komplette Badsanierungen
              und führen die Planung mit Ihnen zusammen durch, sodass wir Sie umfassend von unseren kreativen Vorschlägen begeistern können.
            </p>
          </Col>

          <Col className="aboutStart" xs="12" sm="12" md="12" lg="12">
            <h2>Wieso sind wir Ihr Ansprechpartner?</h2>
            <p className="aboutContent">
              Kontinuierliche Weiterbildung und der Besuch auf europäischen Messen zeigen uns ständig
              neue kreative Lösungen bei der Badplanung auf. So sind wir für Sie immer auf dem
              aktuellsten Stand und können dies in Ihrem Projekt verwirklichen.

              Wir arbeiten Ihr Bauvorhaben nicht nach Schema F ab,
              sondern behandeln jedes Projekt individuell nach den örtlichen Gegebenheit
              und holen somit für Sie das maximal beste Ergebnis heraus.

              Wenn Sie möchten, dass wir auch Ihr Projekt zu unserem machen,
              dann kontaktieren Sie uns doch einfach.
            </p>
          </Col>

        </Row>


      </div>
    );
  }
}

export default About;
