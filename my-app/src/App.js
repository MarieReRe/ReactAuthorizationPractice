import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from './home/Home';
import Profile from './profile/profile'

export default class App extends Component {
  render() {

    return (
      <>
        <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
      </>
    )

  };
}


