import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';
import CounterProvider from './counter-provider';

const Root = () => (
  <CounterProvider>
    <App />
  </CounterProvider>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<Root />, rootElement);
