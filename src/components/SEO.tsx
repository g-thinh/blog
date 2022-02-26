import Head from "next/head";
import { useRouter } from "next/router";
import { MDXFrontmatter } from "utils/mdxUtils";

type SEOProps = {
  meta: MDXFrontmatter;
};

export default function SEO({ meta }: SEOProps): JSX.Element {
  const router = useRouter();
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.imageUrl} />
      <meta property="og:url" content={process.env.baseUrl + router.pathname} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
