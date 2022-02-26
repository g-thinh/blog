import MDXComponent from "components/MDXComponent";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { BLOG_PATH, getSinglePost, getAllPosts } from "utils/mdxUtils";
import PostTitle from "components/PostTitle";
import { Section } from "components/Layout";
import { Box } from "components/Primitive";
import Image from "components/Image";

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
      <Section css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
        <PostTitle {...props.frontmatter} />
        <Box css={{ my: "$5" }}>
          <Image
            src={props.frontmatter?.imageUrl ?? ""}
            alt={props.frontmatter.imageAltText}
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
