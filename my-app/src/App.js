import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from './home/Home';
import Profile from './profile/profile'
import Nav from './nav'
import './index.css'

export default class App extends Component {
  render() {

    return (
      <>
        <Nav />
        <div className="body">
          <Route path="/" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
        </div>

      </>
    )

  };
}


