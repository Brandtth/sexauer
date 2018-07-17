import React, { Component } from 'react';
import './Contact.css';
import { Row, Col, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { Icon } from 'react-icons-kit'
import {location2} from 'react-icons-kit/icomoon/location2';
import {phone} from 'react-icons-kit/icomoon/phone';
import {mail} from 'react-icons-kit/icomoon/mail'

import axios from 'axios';

class Contact extends Component {
  constructor (props){
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      message: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  async handleSubmit(e){
    e.preventDefault()

    const { firstname, lastname, email, message} = this.state

    const form = await axios.post('/api/form', {
      firstname,
      lastname,
      email,
      message
    })
  }


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

        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="firstname">Vorname:</Label>
            <Input
            type="text"
            name="firstname"
            onChange={this.handleChange}/>
          </FormGroup>

          <FormGroup>
            <Label for="lastname">Nachname:</Label>
            <Input
              type="text"
              name="lastname"
              onChange={this.handleChange}/>
          </FormGroup>

          <FormGroup>
            <Label for="email">E-Mail:</Label>
            <Input
              type="email"
              name="email"
              onChange={this.handleChange}/>
          </FormGroup>

          <FormGroup>
            <Label for="message">Message:</Label>
            <Input
              type="textarea"
              name="message"
              onChange={this.handleChange}/>
          </FormGroup>

          <Button>Submit</Button>
        </Form>

      </div>
    );
  }
}

export default Contact;
