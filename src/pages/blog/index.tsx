import CardLatestPost from "components/CardLatestPost";
import CardPost from "components/CardPost";
import { Section } from "components/Layout";
import MDXComponent from "components/MDXComponent";
import { Grid } from "components/Primitive";
import SEO from "components/SEO";
import { Heading } from "components/Typography";
import { InferGetStaticPropsType } from "next";
import { getPosts, getSinglePost, LANDING_PATH } from "utils/mdxUtils";

export async function getStaticProps() {
  const { code, frontmatter } = await getSinglePost("blog", LANDING_PATH);
  const posts = await getPosts();

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
    <Section>
      <SEO meta={{ ...props.frontmatter }} />
      <MDXComponent code={props.code} />
      <Heading as="h2" level="two" css={{ color: "$secondary", mb: "$4" }}>
        What&apos;s New?
      </Heading>
      {props.posts?.map((post, index) => {
        return (
          index === 0 && (
            <CardLatestPost key={post.frontmatter?.title} {...post} />
          )
        );
      })}
      <Heading as="h2" level="two" css={{ mt: "$10", mb: "$4" }}>
        Previous Posts
      </Heading>
      <Grid
        css={{
          gridTemplateColumns: "repeat(1, 1fr)",
          gridAutoRows: "1fr",
          gap: "$8",
          "@md": {
            gridTemplateColumns: "repeat(2, 1fr)",
          },
        }}
      >
        {props.posts?.map((post, index) => {
          return (
            index !== 0 && <CardPost key={post.frontmatter?.title} {...post} />
          );
        })}
      </Grid>
    </Section>
  );
}
