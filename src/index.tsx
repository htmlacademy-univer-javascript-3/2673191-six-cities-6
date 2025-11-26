import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import offers from './mocks/offers';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App models={offers} placeCards={offers} />
    </Provider>
  </React.StrictMode>
);
