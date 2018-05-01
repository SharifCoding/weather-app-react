// IMPORT LIBRARY
import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import { location } from './data/forecast.json';

// Render function to make React element appear in the DOM.
render(<App location={location} />, document.getElementById('root'));
