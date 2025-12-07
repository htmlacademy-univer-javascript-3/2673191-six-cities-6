import { createReducer } from '@reduxjs/toolkit';
import { CityModel } from '../models/city';
import { OfferShortModel } from '../models/offer-short-model';
import { selectCity, setAuthStatus, setCurrentUser, setOffers } from './action';
import cities from '../mocks/cities';
import { AuthorizationStatus } from '../models/authorization-status';
import { UserModel } from '../models/user-model';

export type State = {
  authStatus: AuthorizationStatus;
  currentUser: UserModel | null;
  selectedCity: CityModel;
  offers: OfferShortModel[] | null;
}

const initialState: State = {
  authStatus: AuthorizationStatus.Unknown,
  currentUser: null,
  selectedCity: cities[0],
  offers: null
};

export const reducer = createReducer(initialState, (builder) => builder
  .addCase(setAuthStatus, (state, { payload }) => {
    state.authStatus = payload;
  })
  .addCase(setCurrentUser, (state, { payload }) => {
    state.currentUser = payload;
  })
  .addCase(selectCity, (state, { payload }) => {
    state.selectedCity = payload;
  })
  .addCase(setOffers, (state, { payload }) => {
    state.offers = payload;
  })
);
