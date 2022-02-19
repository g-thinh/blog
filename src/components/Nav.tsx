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
  py: "$5",
  px: "$8",
  "@lg": {
    px: "$0",
  },
});

export default function Nav() {
  return (
    <Container as="nav">
      <Link href="/">
        <Heading level="two">Gia Thinh Nguyen</Heading>
      </Link>
      <Flex css={{ alignItems: "center", gap: "$5" }}>
        <LazyToggleColorMode />
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
      </Flex>
    </Container>
  );
}
