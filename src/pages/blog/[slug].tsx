import CardPost from "components/CardPost";
import Image from "components/Image";
import { Section } from "components/Layout";
import MDXComponent from "components/MDXComponent";
import PostTitle from "components/PostTitle";
import { Box, Divider, Flex, Grid } from "components/Primitive";
import SEO from "components/SEO";
import { Heading } from "components/Typography";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { BLOG_PATH, getPosts, getSinglePost } from "utils/mdxUtils";

export async function getStaticProps(context: GetStaticPropsContext) {
  const blogPostName = context?.params?.slug as string;
  const { code, frontmatter } = await getSinglePost(blogPostName, BLOG_PATH);
  const relatedPosts = await getPosts({ tags: frontmatter.tags, limit: 5 });

  const similarPosts = relatedPosts.filter(
    (post) => post.frontmatter?.title !== frontmatter.title
  );

  return {
    props: {
      code,
      frontmatter,
      similarPosts,
    },
  };
}

export const getStaticPaths = async () => {
  const paths = getPosts().map(({ slug }) => ({
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
    <Section>
      <SEO meta={{ ...props.frontmatter }} />
      <Flex stack="column" css={{ gap: "$4" }}>
        <PostTitle {...props.frontmatter} />
        <Box css={{ my: "$5" }}>
          <Image
            src={props.frontmatter?.imageUrl ?? ""}
            alt={props.frontmatter.imageAltText ?? ""}
            priority
            css={{
              "@lg": { marginRight: "-2rem", marginLeft: "-2rem" },
            }}
          />
        </Box>
      </Flex>
      <MDXComponent code={props.code} />
      {props.similarPosts.length > 0 && (
        <>
          <Divider />
          <Heading as="h2" level="two" css={{ mb: "$4", color: "$secondary" }}>
            Similar Posts
          </Heading>
          <Grid type="posts">
            {props.similarPosts.map((post) => (
              <CardPost
                key={post.frontmatter?.title}
                full_slug={post.full_slug ?? ""}
                frontmatter={{
                  title: post.frontmatter?.title,
                  description: post.frontmatter?.description,
                }}
              />
            ))}
          </Grid>
        </>
      )}
    </Section>
  );
}
