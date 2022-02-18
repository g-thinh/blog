import dynamic from "next/dynamic";
import { styled } from "styles/stitches.config";
import Link from "./Link";
import { Flex } from "./Primitive";
import { Heading } from "./Typography";

const LazyToggleColorMode = dynamic(
  () => import("components/ToggleColorMode"),
  { ssr: false }
);

const Container = styled(Flex, {
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: "$4xl",
  width: "100%",
  margin: "auto",
  py: "$3",
  px: "$2",
  "@md": {
    px: "$0",
  },
});

export default function Nav() {
  return (
    <Container>
      <Link href="/">
        <Heading level="three">Gia Thinh Nguyen</Heading>
      </Link>
      <Flex css={{ alignItems: "center", gap: "$5" }}>
        <LazyToggleColorMode />
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
      </Flex>
    </Container>
  );
}
