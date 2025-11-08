import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { Setting } from './configuration/consts';
import offers from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App mainPagePlacesCount={Setting.mainPagePlaceCardsPerPage} models={offers} placeCards={offers}/>
  </React.StrictMode>
);
