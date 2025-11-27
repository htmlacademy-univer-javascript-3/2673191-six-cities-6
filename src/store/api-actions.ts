import { AxiosInstance } from 'axios';
import { AppDispatch } from '.';
import { State } from './reducer';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { OfferShortModel } from '../models/offer-short-model';
import { setOffers } from './action';

type AsyncThunkConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}

export const fetchOffers = createAsyncThunk<void, undefined, AsyncThunkConfig>(
  'fetch_offers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<OfferShortModel[]>('offers');
    dispatch(setOffers(data));
  },
);
