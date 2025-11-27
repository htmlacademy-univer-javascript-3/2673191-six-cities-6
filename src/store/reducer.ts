import { createReducer } from '@reduxjs/toolkit';
import { CityModel } from '../models/city';
import { OfferShortModel } from '../models/offer-short-model';
import { selectCity, setOffers } from './action';
import offers from '../mocks/offers';
import cities from '../mocks/cities';

export type State = {
  selectedCity: CityModel;
  offers: OfferShortModel[];
}

const initialState: State = {
  selectedCity: cities[0],
  offers: offers
};

export const reducer = createReducer(initialState, (builder) => builder
  .addCase(selectCity, (state, { payload }) => {
    state.selectedCity = payload;
  })
  .addCase(setOffers, (state, { payload }) => {
    state.offers = payload;
  })
);
