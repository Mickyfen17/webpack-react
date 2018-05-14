import React, { Component, Fragment } from 'react';
import webpackSvg from 'images/webpack.svg';
import reactLogo from 'images/react-logo.png';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <img
          src={reactLogo}
          style={{ height: 50, width: 50 }}
          alt="react logo"
        />
        <img
          src={webpackSvg}
          style={{ height: 50, width: 150 }}
          alt="webpack logo"
        />
      </Fragment>
    );
  }
}

export default App;
