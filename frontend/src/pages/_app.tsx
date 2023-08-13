import type { AppProps } from 'next/app';
import '@/styles/styles.scss';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { appWithTranslation } from 'next-i18next';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default appWithTranslation(App);
