import { css, styled, theme } from "styles/stitches.config";
import Footer from "./Footer";
import Nav from "./Nav";
import { Box, Flex } from "./Primitive";
import Head from "next/head";

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
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content={theme.colors.sky3.value} />
      </Head>
      <Flex stack="column" css={{ minHeight: "100vh" }}>
        <Nav />
        <Main>{children}</Main>
        <Footer />
      </Flex>
    </>
  );
}
