import MDXComponent from "components/MDXComponent";
import { InferGetStaticPropsType } from "next";
import dynamic from "next/dynamic";
import { getSinglePost, LANDING_PATH } from "utils/mdxUtils";
import Flex from "components/Flex";
import Text from "components/Text";

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
    <Flex css={{ flexDirection: "column" }}>
      <Text>Hello World</Text>
      <LazyToggleColorMode />
      <MDXComponent code={props.code} />
    </Flex>
  );
}
