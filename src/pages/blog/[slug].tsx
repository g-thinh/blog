import Image from "components/Image";
import { Section } from "components/Layout";
import MDXComponent from "components/MDXComponent";
import PostTitle from "components/PostTitle";
import { Box, Flex } from "components/Primitive";
import SEO from "components/SEO";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { BLOG_PATH, getAllPosts, getSinglePost } from "utils/mdxUtils";

export async function getStaticProps(context: GetStaticPropsContext) {
  const blogPostName = context?.params?.slug as string;
  const { code, frontmatter } = await getSinglePost(blogPostName, BLOG_PATH);

  return {
    props: {
      code,
      frontmatter,
    },
  };
}

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({
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
            alt={props.frontmatter.imageAltText}
            priority
            css={{
              "@lg": { marginRight: "-2rem", marginLeft: "-2rem" },
            }}
          />
        </Box>
      </Flex>
      <MDXComponent code={props.code} />
    </Section>
  );
}
