import '@styles/globals.css';
import { initialCongifureTheme } from '@utils/theme';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    initialCongifureTheme();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
