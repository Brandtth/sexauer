import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import References from './components/References/References'
import Services from './components/Services/Services'




const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/references' component={References} />
            <Route path='/services' component={Services} />
        </Switch>
    </BrowserRouter>
);

export default Routes;