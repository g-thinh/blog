import { styled } from "styles/stitches.config";
import { Box, Flex } from "./Primitive";
import Nav from "./Nav";

const Main = styled(Box, {
  mt: "$10",
  width: "100%",
});

export const Section = styled("section", {
  maxWidth: "$4xl",
  margin: "auto",
});

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <Flex stack="column" css={{ minHeight: "100vh" }}>
      <Nav />
      <Main>{children}</Main>
    </Flex>
  );
}
