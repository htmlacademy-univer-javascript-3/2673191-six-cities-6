import MainPage from './pages/main-page/main-page';

type AppProps = {
  mainPagePlaceCardsPerPage: number;
};

export default function App(props: AppProps): JSX.Element {
  return (
    <MainPage placeCardsPerPage={props.mainPagePlaceCardsPerPage}/>
  );
}
