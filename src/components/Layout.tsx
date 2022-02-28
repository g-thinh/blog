import { useTheme } from "next-themes";
import Head from "next/head";
import { css, styled } from "styles/stitches.config";
import Footer from "./Footer";
import Nav from "./Nav";
import { Box, Flex } from "./Primitive";

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

export const Section = styled("div", sectionStyles);

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="theme-color"
          content={isDark ? "hsl(201, 74.6%, 12.2%)" : "currentColor"}
        />
      </Head>
      <Flex stack="column" css={{ minHeight: "100vh" }}>
        <Nav />
        <Main>{children}</Main>
        <Footer />
      </Flex>
    </>
  );
}
