import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import Index from './../Index';
import About from './../About';
import Item from './../Item';
import NotFound from './../NotFound';

import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.header}>
          <Link to="#" className={styles.Link}>[Css modules]</Link>
          <Link to="/" className={styles.Link}>Home</Link>
          <Link to="/about" className={styles.Link}>About</Link>
        </header>
        <div className={styles.body}>
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
