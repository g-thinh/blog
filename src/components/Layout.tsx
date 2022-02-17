import { styled } from "styles/stitches.config";
import { Box, Flex } from "./Primitive";

const Main = styled(Flex, {
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  flex: "1",
});

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <Flex stack="column" css={{ minHeight: "100vh" }}>
      <Main>
        <Box
          css={{
            minWidth: 0,
            flex: 1,
            maxWidth: "$4xl",
          }}
        >
          {children}
        </Box>
      </Main>
    </Flex>
  );
}
