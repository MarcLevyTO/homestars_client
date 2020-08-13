import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import actionCable from 'actioncable';

const CableApp = {};

CableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable');

ReactDOM.render(
  <React.StrictMode>
    <App cableApp={CableApp} />
  </React.StrictMode>,
  document.getElementById('root')
);