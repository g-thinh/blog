import dynamic from "next/dynamic";
import { styled } from "styles/stitches.config";
import { Flex } from "./Primitive";
import { Text, Heading } from "./Typography";

const LazyToggleColorMode = dynamic(
  () => import("components/ToggleColorMode"),
  { ssr: false }
);

const Container = styled(Flex, {
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: "$4xl",
  margin: "auto",
  py: "$3",
  width: "100%",
});

export default function Nav() {
  return (
    <Container>
      <Heading level="three">Gia Thinh Nguyen</Heading>
      <Flex css={{ alignItems: "center", gap: "$5" }}>
        <LazyToggleColorMode />
        <Text>About</Text>
        <Text>Blog</Text>
      </Flex>
    </Container>
  );
}
