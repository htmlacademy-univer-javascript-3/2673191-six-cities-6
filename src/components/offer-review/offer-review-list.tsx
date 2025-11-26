import { ReviewModel } from '../../models/review-model';
import OfferReview from './offer-review';

type Props = {
  models: ReviewModel[];
};

export default function OfferReviewList({ models }: Props): JSX.Element {
  return (
    <ul className="reviews__list">
      {models.map((m) => (
        <OfferReview key={m.id} model={m} />
      ))}
    </ul>
  );
}
