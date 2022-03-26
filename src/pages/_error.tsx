import { Section } from "components/Layout";
import Link from "components/Link";
import { Heading } from "components/Typography";
import { NextPageContext } from "next";

type ErrorPageProps = {
  statusCode?: number;
};

export default function Error({ statusCode }: ErrorPageProps) {
  return (
    <Section css={{ textAlign: "center" }}>
      <Heading as="h1" css={{ mb: "$5", span: { color: "$red10" } }}>
        Oops, looks like there&apos;s a <span>{statusCode} error</span> here
      </Heading>
      <Link href="/">Return to the homepage</Link>
    </Section>
  );
}

Error.getInitialProps = async ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
