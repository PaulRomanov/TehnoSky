import './styles.scss';
import IMAGE from './assets/react-logo.png';

export const App = () => {
  return (
    <>
      <h1>TehnoSky</h1>
      <img src={IMAGE} alt="react-logo" width="300" height="200" />
    </>
  );
};

export default App;
