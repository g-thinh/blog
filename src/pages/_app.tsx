import type { AppProps } from "next/app";
import GlobalStyles from "styles/GlobalStyles";
import { ThemeProvider } from "@theme-ui/core";
import { theme } from "styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
