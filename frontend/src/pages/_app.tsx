import type { AppProps } from 'next/app';
import '@/styles/styles.scss';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
