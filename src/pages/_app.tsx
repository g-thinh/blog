import "@fontsource/inter";
import "@fontsource/poppins";
import type { AppProps } from "next/app";
import GlobalStyles from "styles/GlobalStyles";
import { theme } from "styles/theme";
import { ThemeProvider } from "theme-ui";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
