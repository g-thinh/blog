import { styled, css } from "styles/stitches.config";
import { Box, Flex } from "./Primitive";
import Nav from "./Nav";

const Main = styled(Box, {
  mt: "$10",
  width: "100%",
  flex: 1,
});

export const sectionStyles = css({
  maxWidth: "$4xl",
  margin: "auto",
  px: "$8",
  "@lg": {
    px: "$0",
  },
});

export const Section = styled("section", sectionStyles);

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <Flex stack="column" css={{ minHeight: "100vh" }}>
      <Nav />
      <Main>{children}</Main>
    </Flex>
  );
}
