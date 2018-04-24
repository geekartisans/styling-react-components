import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import Index from './../Index';
import About from './../About';
import Item from './../Item';
import NotFound from './../NotFound';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="#" className="Link">[Css]</Link>
          <Link to="/" className="Link">Home</Link>
          <Link to="/about" className="Link">About</Link>
        </header>
        <div className="App-body">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/about" component={About} />
            <Route path="/item/:id" component={Item} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
