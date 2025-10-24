import { PlaceCardShortModel } from './place-card-short-model';

export type PlaceCardModel = Omit<PlaceCardShortModel, 'previewImage'> & {
  description: string;
  images: string[];
  goods: string[];
  host: {
    isPro: boolean;
    name: string;
    avatarUrl: string;
  };
  bedrooms: number;
  maxAdults: number;
};
