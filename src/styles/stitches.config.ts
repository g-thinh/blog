import {
  amber,
  amberDark,
  blue,
  blueDark,
  gray,
  grayDark,
  green,
  greenDark,
  red,
  redDark,
  sky,
  skyDark,
} from "@radix-ui/colors";
import type * as Stitches from "@stitches/react";
import { createStitches } from "@stitches/react";

export const {
  styled,
  getCssText,
  globalCss,
  createTheme,
  theme,
  css,
  keyframes,
  config,
} = createStitches({
  theme: {
    fonts: {
      untitled: "Untitled Sans, apple-system, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
      body: "Inter",
      header: "Poppins",
      code: "JetBrains Mono, Consolas, Monaco, Lucida Console",
    },
    space: {
      0: "0rem",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeights: {
      normal: "normal",
      none: 1,
      shorter: 1.25,
      short: 1.375,
      base: 1.5,
      tall: 1.625,
      taller: "2",
      "3": ".75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
    },
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    sizes: {
      max: "max-content",
      min: "min-content",
      full: "100%",
      "3xs": "14rem",
      "2xs": "16rem",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      "8xl": "90rem",
    },
    borderWidths: {},
    borderStyles: {},
    radii: {
      none: "0",
      sm: "0.125rem",
      base: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
    shadows: {
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1),0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      about:
        "2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),12.5px 12.5px 10px rgba(0, 0, 0, 0.035),22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),100px 100px 80px rgba(0, 0, 0, 0.07)",
      large:
        "1px 2px 2px hsl(0deg 0% 50% / 0.2),2px 4px 4px hsl(0deg 0% 50% / 0.2),4px 8px 8px hsl(0deg 0% 50% / 0.2),8px 16px 16px hsl(0deg 0% 50% / 0.2),16px 32px 32px hsl(0deg 0% 50%/ 0.2)",
    },
    zIndices: {},
    transitions: {},
    colors: {
      ...gray,
      ...blue,
      ...red,
      ...green,
      ...amber,
      ...sky,
      shadow: "0deg 0% 50%",
      primary: "$blue10",
      secondary: "$amber10",
      text: "$gray12",
      background: "$gray2",
    },
  },
  media: {
    dark: "(prefers-color-scheme: dark)",
    sm: "(min-width: 30em)", //480px
    md: "(min-width: 48em)", //768px
    lg: "(min-width: 64em)", //1024px
    xl: "(min-width: 80em)", //1280px
  },
  utils: {
    m: (value: Stitches.ScaleValue<"space">) => ({
      margin: value,
    }),
    mt: (value: Stitches.ScaleValue<"space">) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.ScaleValue<"space">) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.ScaleValue<"space">) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.ScaleValue<"space">) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.ScaleValue<"space">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.ScaleValue<"space">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: (value: Stitches.ScaleValue<"space">) => ({
      padding: value,
    }),

    px: (value: Stitches.ScaleValue<"space">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),

    py: (value: Stitches.ScaleValue<"space">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    pt: (value: Stitches.ScaleValue<"space">) => ({
      paddingTop: value,
    }),

    pb: (value: Stitches.ScaleValue<"space">) => ({
      paddingBottom: value,
    }),

    pl: (value: Stitches.ScaleValue<"space">) => ({
      paddingLeft: value,
    }),

    pr: (value: Stitches.ScaleValue<"space">) => ({
      paddingRight: value,
    }),

    // A property for applying width/height together
    size: (value: Stitches.ScaleValue<"space"> | number) => ({
      width: value,
      height: value,
      minWidth: value,
      minHeight: value,
    }),

    // A property to apply linear gradient
    linearGradient: (value: Stitches.PropertyValue<"backgroundImage">) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    // An abbreviated property for border-radius
    br: (value: Stitches.ScaleValue<"radii">) => ({
      borderRadius: value,
    }),
    bc: (value: Stitches.PropertyValue<"backgroundColor">) => ({
      backgroundColor: value,
    }),
  },
});

export type CSS = Stitches.CSS<typeof config>;

export const darkTheme = createTheme({
  colors: {
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
    ...amberDark,
    ...skyDark,

    primary: "$blue10",
    secondary: "$amber10",
    text: "$gray12",
    background: "$gray2",
  },
});

const globalStyles = globalCss({
  "@import": [
    "url('https://cdn.jsdelivr.net/gh/jgthms/minireset.css@master/minireset.min.css')", //CSS Rest
    "url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap')",
    "url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')",
    "url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap')",
  ],
  body: {
    fontFamily: "$body",
    background: "$gray2",
    color: "$gray12",
  },
});

globalStyles();
