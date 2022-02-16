import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { InitializeColorMode } from "theme-ui";

export default class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="canonical" href={process.env.baseUrl} />
          <meta name="robots" content="index, follow" />
          <meta property="og:site_name" content={process.env.baseUrl} />
          <meta property="og:type" content="article" />
          <meta name="twitter:site" content="@GThinhNguyen" />
          <meta name="twitter:creator" content="@GThinhNguyen" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <InitializeColorMode />
        </body>
      </Html>
    );
  }
}
