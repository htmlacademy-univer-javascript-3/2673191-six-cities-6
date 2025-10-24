import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { Setting } from './configuration/consts';
import placeCards from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App mainPagePlacesCount={Setting.mainPagePlaceCardsPerPage} mainPagePlaceCards={placeCards}/>
  </React.StrictMode>
);
