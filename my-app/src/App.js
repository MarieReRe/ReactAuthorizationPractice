import React from 'react';
import { Route } from "react-router-dom";
import Home from './home/Home';
import Profile from './profile/profile'
import Nav from './nav'
import './index.css'
import Auth from './Auth/Auth';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.auth = new Auth(this.props.history);
  }
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


