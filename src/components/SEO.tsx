import Head from "next/head";
import { useRouter } from "next/router";
import { MDXFrontmatter } from "utils/mdxUtils";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(advancedFormat);
dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.tz.setDefault("Eastern Daylight Time");

type SEOProps = {
  meta: MDXFrontmatter;
};

export default function SEO({ meta }: SEOProps): JSX.Element {
  const router = useRouter();
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>Gia Thinh Nguyen - {meta.title}</title>
      <meta name="author" content="Gia Thinh Nguyen" />
      <meta property="og:type" content="article" />
      {meta.tags && <meta name="keywords" content={meta.tags?.toString()} />}
      {meta.publishedDate && (
        <meta
          property="article:published_time"
          content={dayjs(meta.publishedDate).format("YYYY-MM-DDTHH:mm:ssZZ")}
        />
      )}
      <meta name="description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.imageUrl} />
      <meta property="og:url" content={process.env.baseUrl + router.asPath} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
