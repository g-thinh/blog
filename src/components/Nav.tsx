import dynamic from "next/dynamic";
import { styled } from "styles/stitches.config";
import Link from "./Link";
import { Box, Flex } from "./Primitive";
import { Heading, headingTwoStyles } from "./Typography";
import Wave from "./Wave";

const LazyToggleColorMode = dynamic(
  () => import("components/ToggleColorMode"),
  { ssr: false }
);

const Container = styled(Flex, {
  maxWidth: "$4xl",
  width: "100%",
  margin: "auto",
  py: "$5",
  px: "$8",
  flexDirection: "column",
  gap: "$2",
  "@md": {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  "@lg": {
    px: "$0",
  },
});

const Dot = styled("span", headingTwoStyles, {
  color: "$primary",
});

export default function Nav() {
  return (
    <Box css={{ backgroundColor: "$sky3", position: "relative" }}>
      <Container as="nav">
        <Link href="/">
          <Heading level="two">
            Gia Thinh Nguyen
            <Dot>.</Dot>
          </Heading>
        </Link>
        <Flex css={{ alignItems: "center", gap: "$5" }}>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <LazyToggleColorMode />
        </Flex>
      </Container>
      <Wave fill="$sky3" />
    </Box>
  );
}
