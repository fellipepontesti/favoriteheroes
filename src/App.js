import React from 'react';
import './global.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header/index';
import Heroes from './pages/Heroes';
import Hero from './pages/Hero';
import Sobre from './pages/Sobre';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/hero/:slug" component={Hero}/>
                <Route path="/sobre" component={Sobre}/>
                <Route path="/heroes" component={Heroes}/>
            </Switch>
        </BrowserRouter>
  );
}

export default App;
