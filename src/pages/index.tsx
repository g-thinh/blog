import MDXComponent from "components/MDXComponent";
import SEO from "components/SEO";
import { InferGetStaticPropsType } from "next";
import { getSinglePost, LANDING_PATH } from "utils/mdxUtils";

export async function getStaticProps() {
  const { code, frontmatter } = await getSinglePost("home", LANDING_PATH);

  return {
    props: {
      code,
      frontmatter,
    },
  };
}

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <>
      <SEO meta={{ ...props.frontmatter }} />
      <MDXComponent code={props.code} />
    </>
  );
}
