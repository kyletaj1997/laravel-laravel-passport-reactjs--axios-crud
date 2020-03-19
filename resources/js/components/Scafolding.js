import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import About from './pages/About'
import Registration from './pages/Registration'
import Home from './pages/Home'
import Nav from './pages/Nav'
import Aboutid from './pages/Aboutid'
import  { BrowserRouter as Routers,Switch,Route} from 'react-router-dom';
import './pages/app.css'

class Scafolding extends Component {
    render() {
        return (
         <Routers>   
            <div>

                <Nav></Nav>
                <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/About" exact  component={About}></Route>
                <Route path="/Register" exact component={Registration}></Route>
                <Route path="/About/:id"  component={Aboutid}></Route>
                </Switch>
                
            </div> 
         </Routers>
        );
    }
}

if (document.getElementById('scafolding')) {
   ReactDOM.render(<Scafolding />, document.getElementById('scafolding'));
}
