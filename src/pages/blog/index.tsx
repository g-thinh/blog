import MDXComponent from "components/MDXComponent";
import { InferGetStaticPropsType } from "next";
import { BLOG_PATH, getSinglePost } from "utils/mdxUtils";

export async function getStaticProps() {
  const { code, frontmatter } = await getSinglePost("test", BLOG_PATH);

  return {
    props: {
      code,
      frontmatter,
    },
  };
}

export default function Blog(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <>
      <MDXComponent code={props.code} />
    </>
  );
}
