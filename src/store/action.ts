import { createAction } from '@reduxjs/toolkit';
import { CityModel } from '../models/city';
import { OfferShortModel } from '../models/offer-short-model';

export const selectCity = createAction<CityModel>('select_city');
export const setOffers = createAction<OfferShortModel[]>('set_offers');
