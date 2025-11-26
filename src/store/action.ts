import { createAction } from '@reduxjs/toolkit';
import { CityModel } from '../models/city';
import { PlaceCardShortModel } from '../models/place-card-short-model';

export const selectCity = createAction<CityModel>('select_city');
export const setOffers = createAction<PlaceCardShortModel[]>('set_offers');
