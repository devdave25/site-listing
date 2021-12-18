// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='preload'
            href='/fonts/nunito-variable-font-wght.ttf'
            as='font'
            type='font/ttf'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/nunito-italic-variable-font-wght.ttf'
            as='font'
            type='font/ttf'
            crossOrigin='anonymous'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
