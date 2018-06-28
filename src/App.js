import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Item from './components/Item/Item';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="NavBar">
          <NavBar />
        </div>
          <HashRouter>
            <Switch>
              <Route component={Home} path='/' exact />
              <Route component={Products} path='/Products' />
              <Route component={Item} path='/Item/:item' />
              <Route component={Cart} path='/Cart' />
            </Switch>
          </HashRouter>
          <footer>
            <Footer />
          </footer>
      </div>
    );
  }
}

export default App;
