import { Theme, ThemeUIContextValue, useThemeUI } from "theme-ui";

const makeTheme = <T extends Theme>(t: T): T => {
  return t;
};

const light = {
  primary: "#3182CE",
  secondary: "#F7B108",
  accent: "#00A3C4",
  text: "#000",
  background: "#EFF0F5",
  muted: "#e1e5f2",
  highlight: "#9F7AEA",
  grayness: "#6c757d",
};

const dark = {
  primary: "#4299E1",
  secondary: "#F8BF35",
  accent: "#90cdf4",
  text: "#F0F5FA",
  background: "#222639",
  muted: "#131520",
  highlight: "#B794F4",
  grayness: "#6c757d",
};

const colors = {
  ...light,
  modes: {
    dark,
  },
};

export const theme = makeTheme({
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 96],
  fonts: {
    heading:
      '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    code: "Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.6,
    heading: 1.5,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
  },
  text: {
    default: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: [3, 4],
    },
    paragraph: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: [3, 4],
    },
    heading: {
      color: "text",
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
    main: {
      fontSize: [4, 5],
      fontWeight: "bold",
    },
    subheader: {
      fontSize: [3, 4],
      fontWeight: "body",
    },
  },
  colors,
  shadows: {
    outline: "0px 0px 1px 3px rgba(66,153,225,0.6)",
    sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },
  radii: {
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
  },
  breakpoints: ["48em", "64em"],
});

export type MyTheme = typeof theme;

export type Replace<T extends object, Keys extends keyof T, NewType> = {
  [key in keyof T]: key extends Keys ? NewType : T[key];
};

type WithoutDark = Omit<MyTheme["colors"], "modes">;

export type ExactTheme = Replace<MyTheme, "colors", WithoutDark>;

interface ExactContextValue extends Omit<ThemeUIContextValue, "theme"> {
  theme: ExactTheme;
}

export const useTheme = useThemeUI as unknown as () => ExactContextValue;
