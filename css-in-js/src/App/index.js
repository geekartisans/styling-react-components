import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import Radium from 'radium';
import Index from './../Index';
import About from './../About';
import Item from './../Item';
import NotFound from './../NotFound';


const styles = {
  header: {
    padding: '20px',
    backgroundColor: 'lightgray',
  },
  body: {
    padding: '20px',
  },
  link: {
    marginRight: '10px',
    color: '#000',
    textDecoration: 'none',
  }
};

class App extends Component {
  render() {
    return (
      <div>
        <header style={styles.header}>
          <Link to="#" style={styles.link}>[Css In Js]</Link>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About</Link>
        </header>
        <div style={styles.body}>
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

export default Radium(App);
