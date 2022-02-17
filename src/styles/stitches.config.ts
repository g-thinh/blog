import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

export const { styled, getCssText, globalCss, createTheme, theme } =
  createStitches({
    theme: {
      fonts: {
        untitled: "Untitled Sans, apple-system, sans-serif",
        mono: "Söhne Mono, menlo, monospace",
        body: "Inter",
        header: "Poppins",
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
      shadows: {},
      zIndices: {},
      transitions: {},
      colors: {
        //Gray
        gray50: "#F7FAFC",
        gray100: "#EDF2F7",
        gray200: "#E2E8F0",
        gray300: "#CBD5E0",
        gray400: "#A0AEC0",
        gray500: "#718096",
        gray600: "#4A5568",
        gray700: "#2D3748",
        gray800: "#1A202C",
        gray900: "#171923",

        //Blue
        blue50: "#EAF3FB",
        blue100: "#C4DCF3",
        blue200: "#9EC6EB",
        blue300: "#77B0E3",
        blue400: "#519ADC",
        blue500: "#2B84D4",
        blue600: "#2369A9",
        blue700: "#1A4F7F",
        blue800: "#113555",
        blue900: "#091A2A",

        primary: "#3182CE",
        secondary: "#F7B108",
        accent: "#00A3C4",
        text: "#000",
        background: "#EFF0F5",
        muted: "#e1e5f2",
        highlight: "#9F7AEA",
        grayness: "#6c757d",
      },
    },
    media: {
      dark: "(prefers-color-scheme: dark)",
      sm: "(min-width: 375px)",
      md: "(min-width: 768px)",
      lg: "(min-width: 1024px)",
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

      // A property for applying width/height together
      size: (value: Stitches.ScaleValue<"space">) => ({
        width: value,
        height: value,
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

export const darkTheme = createTheme({
  colors: {
    primary: "#4299E1",
    secondary: "#F8BF35",
    accent: "#90cdf4",
    text: "#F0F5FA",
    background: "#222639",
    muted: "#131520",
    highlight: "#B794F4",
  },
});

export const globalStyles = globalCss({
  html: {
    boxSizing: "border-box",
  },

  "*": { boxSizing: "inherit" },
  "*::before": { boxSizing: "inherit" },
  "*::after": { boxSizing: "inherit" },

  body: {
    background: "$background",
    color: "$text",
    margin: 0,
    fontFamily: "$body",
  },

  "h1, h2, h3,h4,h5,h6": {
    fontFamily: "$header",
  },
});

globalStyles();
