import MDXComponent from "components/MDXComponent";
import { InferGetStaticPropsType } from "next";
import { getSinglePost, LANDING_PATH } from "utils/mdxUtils";

export async function getStaticProps() {
  const { code, frontmatter } = await getSinglePost("test", LANDING_PATH);

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
      <MDXComponent code={props.code} />
    </>
  );
}
