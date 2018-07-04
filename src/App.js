import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Routes from './routes';
import { Container } from 'reactstrap';
import Icon from 'react-icons-kit';

class App extends Component {

    render() {
        return (

            <Container>
                <Header />
                <Routes/>
                <hr/>
                <Footer/>
            </Container>
        );
    }
}

export default App;
