import MDXComponent from "components/MDXComponent";
import { InferGetStaticPropsType } from "next";
import { Heading } from "components/Typography";
import {
  BLOG_PATH,
  LANDING_PATH,
  getAllPosts,
  getSinglePost,
} from "utils/mdxUtils";
import { Section } from "components/Layout";
import Link from "components/Link";

export async function getStaticProps() {
  const { code, frontmatter } = await getSinglePost("blog", LANDING_PATH);
  const posts = await getAllPosts(BLOG_PATH);

  return {
    props: {
      code,
      frontmatter,
      posts,
    },
  };
}

export default function Blog(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  console.log(props);

  return (
    <>
      <MDXComponent code={props.code} />
      <Section>
        {props.posts?.map((post) => (
          <Link key={post.frontmatter.title} href={post.full_slug}>
            {post.frontmatter.title}
          </Link>
        ))}
      </Section>
    </>
  );
}
