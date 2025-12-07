import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Namespace } from '../namespace';
import handleRequest from '../../tools/handle-request';
import cities from '../../mocks/cities';
import { OfferShortModel } from '../../models/offer-short-model';
import { CityModel } from '../../models/city';
import { AxiosInstance } from 'axios';

export type OffersState = {
  selectedCity: CityModel;
  offers: OfferShortModel[] | null;
}

const initialState: OffersState = {
  selectedCity: cities[0],
  offers: null
};

type AsyncThunkConfig = {
  extra: AxiosInstance;
}

export const fetchOffers = createAsyncThunk<void, undefined, AsyncThunkConfig>(
  'fetch_offers',
  async (_arg, { dispatch, extra: api }) => handleRequest(
    () => api.get<OfferShortModel[]>('offers'),
    (data) => dispatch(setOffers(data)),
    {},
    () => dispatch(setOffers([]))
  ));

export const selectCity = createAction<CityModel>('select_city');
export const setOffers = createAction<OfferShortModel[] | null>('set_offers');

export const offersSlice = createSlice({
  name: Namespace.Offers,
  initialState,
  reducers: {},
  extraReducers: (builder) => builder
  .addCase(selectCity, (state, { payload }) => {
    state.selectedCity = payload;
  })
  .addCase(setOffers, (state, { payload }) => {
    state.offers = payload;
  })
});
