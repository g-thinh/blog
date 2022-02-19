import { Section } from "components/Layout";
import MDXComponent from "components/MDXComponent";
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
    <>
      <MDXComponent code={props.code} />
    </>
  );
}
