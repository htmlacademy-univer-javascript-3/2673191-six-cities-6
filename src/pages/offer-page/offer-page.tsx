import { Link, Navigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/use-app-selector';
import { AppRoute } from '../../app-route';
import Offer from '../../components/offer/offer';
import Header from '../../components/header/header';

export default function OfferPage(): JSX.Element {
  const { id } = useParams<{ id: string }>();

  const offers = useAppSelector((state) => state.offers);

  const model = offers?.filter((m) => m.id === id)[0];
  if (!model) {
    return <Navigate to={AppRoute.Root} />;
  }
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <Offer model={model} nearbyPlaceCards={offers} />
      </main>
    </div>
  );
}
