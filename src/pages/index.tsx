import MDXComponent from "components/MDXComponent";
import { Flex } from "components/Primitive";
import { Text } from "components/Typography";
import { InferGetStaticPropsType } from "next";
import dynamic from "next/dynamic";
import { getSinglePost, LANDING_PATH } from "utils/mdxUtils";

const LazyToggleColorMode = dynamic(
  () => import("components/ToggleColorMode"),
  { ssr: false }
);

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
    <Flex stack="column">
      <Text>Hello World</Text>
      <LazyToggleColorMode />
      <MDXComponent code={props.code} />
    </Flex>
  );
}
