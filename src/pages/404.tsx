import { Section } from "components/Layout";
import Link from "components/Link";
import { Heading } from "components/Typography";

export default function Error404() {
  return (
    <Section css={{ textAlign: "center" }}>
      <Heading as="h1" css={{ mb: "$5", span: { color: "$red10" } }}>
        Oops, looks like there&apos;s a <span>404 error</span> here
      </Heading>
      <Link type="button" href="/">
        Return to the homepage
      </Link>
    </Section>
  );
}
