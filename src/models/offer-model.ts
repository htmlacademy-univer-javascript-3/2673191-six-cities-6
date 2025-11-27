import { OfferShortModel } from './offer-short-model';

export type OfferModel = Omit<OfferShortModel, 'previewImage'> & {
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
