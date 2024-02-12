import MainScreen from '../main-screen/main-screen';

type AppScreenProps = {
  cardCount: number;
}

function App({cardCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen
      cardCount = {cardCount}
    />
  );
}

export default App;
