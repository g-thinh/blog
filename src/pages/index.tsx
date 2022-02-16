import MDXComponent from "components/MDXComponent";
import { InferGetStaticPropsType } from "next";
import React from "react";
import { Box, Button, Heading, Paragraph } from "theme-ui";
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
    <Box px={5}>
      <Button>Hello</Button>
      <Heading>This is a heading</Heading>
      <Paragraph>Hello Again</Paragraph>
      <Box>
        <MDXComponent code={props.code} />
      </Box>
    </Box>
  );
}
