import '../styles/globals.css';
import { Providers } from '../providers';
import App from 'next/app';

import CookiesHandler, { CookiesEnum } from '../utils/CookiesHandler';

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const initialProps = await App.getInitialProps(appContext);

  const token = CookiesHandler.findCookie(
    appContext.ctx?.req?.headers?.cookie || '',
    CookiesEnum.AuthorizationToken
  );

  CookiesHandler.setCookie(CookiesEnum.AuthorizationToken, token);

  return { ...initialProps };
};

export default MyApp;
