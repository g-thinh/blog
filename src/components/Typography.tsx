import { styled, css } from "styles/stitches.config";

export type TextProps = React.ComponentPropsWithoutRef<typeof Text>;
export type HeadingProps = React.ComponentPropsWithoutRef<typeof Heading>;

export const baseTextStyles = css({
  lineHeight: "$tall",
  fontFamily: "$body",
  "@sm": {
    fontSize: "$lg",
  },

  "@md": {
    fontSize: "$xl",
  },
});

export const Text = styled("p", baseTextStyles);

export const Heading = styled("h1", {
  fontFamily: "$header",
  lineHeight: "$tall",
  fontSize: "$4xl",
  "@sm": {
    fontSize: "$5xl",
  },
  "@md": {
    fontSize: "$6xl",
  },

  variants: {
    level: {
      two: {
        fontSize: "$3xl",
        "@sm": {
          fontSize: "$4xl",
        },
        "@md": {
          fontSize: "$5xl",
        },
      },
      three: {
        fontSize: "$2xl",
        "@sm": {
          fontSize: "$3xl",
        },
        "@md": {
          fontSize: "$4xl",
        },
      },
      four: {
        fontSize: "$xl",
        "@sm": {
          fontSize: "$2xl",
        },
        "@md": {
          fontSize: "$3xl",
        },
      },
    },
  },
});
