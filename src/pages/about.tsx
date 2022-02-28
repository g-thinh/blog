import { Section } from "components/Layout";
import MDXComponent from "components/MDXComponent";
import SEO from "components/SEO";
import { InferGetStaticPropsType } from "next";
import { getSinglePost, LANDING_PATH } from "utils/mdxUtils";

export async function getStaticProps() {
  const { code, frontmatter } = await getSinglePost("about", LANDING_PATH);

  return {
    props: {
      code,
      frontmatter,
    },
  };
}

export default function About(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <Section>
      <SEO meta={{ ...props.frontmatter }} />
      <MDXComponent code={props.code} />
    </Section>
  );
}
