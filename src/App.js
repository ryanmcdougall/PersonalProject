import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Products from './components/Products'
import Item from './components/Item';
import Cart from './components/Cart'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavBar />
        </header>
          <HashRouter>
            <Switch>
              <Route component={Home} path='/' exact />
              <Route component={Products} path='/Products' />
              <Route component={Item} path='/Item/:item' />
              <Route component={Cart} path='/Cart' />
            </Switch>
          </HashRouter>
      </div>
    );
  }
}

export default App;
