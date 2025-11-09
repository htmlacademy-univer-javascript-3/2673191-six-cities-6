import OfferReviewForm from './offer-review-form';
import OfferReviewList from './offer-review-list';
import reviewsMock from '../../mocks/reviews';

export default function OfferReviewSection(): JSX.Element {
  const reviews = reviewsMock;
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <OfferReviewList models={reviews} />
      <OfferReviewForm />
    </section>
  );
}
