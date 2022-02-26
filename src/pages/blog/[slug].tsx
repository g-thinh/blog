import Image from "components/Image";
import { Section } from "components/Layout";
import MDXComponent from "components/MDXComponent";
import PostTitle from "components/PostTitle";
import { Box } from "components/Primitive";
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
      <SEO meta={{ ...props.frontmatter }} />
      <Section css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
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
      </Section>
      <MDXComponent code={props.code} />
    </>
  );
}
