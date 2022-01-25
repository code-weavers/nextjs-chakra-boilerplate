import '../styles/globals.css';
import { Providers } from '../providers';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Text</title>
      </Head>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </>
  );
}

export default MyApp;
