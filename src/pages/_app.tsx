import Layout from "components/Layout";
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
