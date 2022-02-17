import "@fontsource/inter";
import "@fontsource/poppins";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { darkTheme } from "styles/stitches.config";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: "light",
        dark: darkTheme.className,
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
