import CardLatestPost from "components/CardLatestPost";
import CardPost from "components/CardPost";
import { Section } from "components/Layout";
import MDXComponent from "components/MDXComponent";
import { Box } from "components/Primitive";
import { Heading } from "components/Typography";
import { InferGetStaticPropsType } from "next";
import {
  BLOG_PATH,
  getAllPosts,
  getSinglePost,
  LANDING_PATH,
} from "utils/mdxUtils";

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
  return (
    <>
      <MDXComponent code={props.code} />
      <Section css={{ mb: "$10" }}>
        <Heading as="h2" level="two" css={{ color: "$secondary", mb: "$4" }}>
          What&apos;s New?
        </Heading>
        <Box
          css={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gridAutoRows: "1fr",
            gap: "$4",
          }}
        >
          {props.posts?.map((post, index) => {
            return (
              index === 0 && (
                <CardLatestPost
                  key={post.frontmatter.title}
                  href={post.full_slug}
                  title={post.frontmatter.title}
                  description={post.frontmatter.description}
                  imageUrl={post.frontmatter?.imageUrl}
                  date={post.frontmatter.date}
                  imageAltText={post.frontmatter?.imageAltText}
                />
              )
            );
          })}
        </Box>
      </Section>
      <Section>
        <Heading as="h2" level="two" css={{ mt: "$10", mb: "$4" }}>
          Previous Posts
        </Heading>
        <Box
          css={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gridAutoRows: "1fr",
            gap: "$8",
            "@md": {
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "$8",
            },
          }}
        >
          {props.posts?.map((post, index) => {
            return (
              index !== 0 && (
                <CardPost
                  key={post.frontmatter.title}
                  href={post.full_slug}
                  title={post.frontmatter.title}
                  description={post.frontmatter.description}
                  tags={post.frontmatter.tags}
                  date={post.frontmatter.date}
                />
              )
            );
          })}
        </Box>
      </Section>
    </>
  );
}
