import Document, { Head, Html, Main, NextScript } from 'next/document';

import CookieSingleton from '../utils/CookieSingleton';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    CookieSingleton.token =
      ctx.req.headers.cookie
        .split(';')
        ?.find((item) => item.includes('token'))
        ?.split('=')[1] || '';

    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
