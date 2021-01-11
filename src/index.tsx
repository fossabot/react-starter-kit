import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import { HelmetProvider } from 'react-helmet-async';

import './index.css';
import App from './App';

import { Provider as RouterProvider } from 'router';
import { Provider as StoreProvider } from 'store';

import ErrorBoundary from 'utils/ErrorBoundary';
import buildComponentTree from 'utils/buildComponentTree';

const message: string = 2;

const Providers = buildComponentTree([
  // [SomeProvider, { initialState: '' }],
  [StoreProvider],
  [HelmetProvider],
  [RouterProvider],
  [ErrorBoundary],
]);

function render(Component: JSX.Element) {
  return ReactDOM.render(
    <React.StrictMode>
      <Providers>
        <Component />
      </Providers>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render(App);

// Enable hot-module-replacement https://medium.com/@brianhan/hot-reloading-cra-without-eject-b54af352c642
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
