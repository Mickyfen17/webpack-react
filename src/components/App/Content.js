import React, { Fragment } from 'react';
import webpackSvg from 'images/webpack.svg';
import reactLogo from 'images/react-logo.png';

export const Content = () => (
  <Fragment>
    <img src={reactLogo} style={{ height: 50, width: 50 }} alt='react logo' />
    <img src={webpackSvg} style={{ height: 50, width: 150 }} alt='webpack logo' />
  </Fragment>
);
