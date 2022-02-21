import MDXComponent from "components/MDXComponent";
import { Heading } from "components/Typography";
import { InferGetStaticPropsType } from "next";
import { BLOG_PATH, getSinglePost, getAllPosts } from "utils/mdxUtils";

export async function getStaticProps() {
  const { code, frontmatter } = await getSinglePost("test", BLOG_PATH);

  return {
    props: {
      code,
      frontmatter,
    },
  };
}

export const getStaticPaths = async () => {
  const paths = getAllPosts(BLOG_PATH).map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default function BlogPost(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <>
      <MDXComponent code={props.code} />
    </>
  );
}
