import { ChallengesProvider } from '../context/ChallegesContext';
import { CountdownProvider } from '../context/CountdownContext';

import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <CountdownProvider>
        <Component {...pageProps} />
      </CountdownProvider>
    </ChallengesProvider>
  );
}

export default MyApp;
