import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Index from './../Index';
import About from './../About';
import Item from './../Item';
import NotFound from './../NotFound';
import { Header, Body, Link } from './styled';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <Link to="#">[Styled]</Link>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </Header>
        <Body>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/about" component={About} />
            <Route path="/item/:id" component={Item} />
            <Route component={NotFound} />
          </Switch>
        </Body>
      </div>
    );
  }
}

export default App;
