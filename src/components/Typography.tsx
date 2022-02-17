import { styled } from "styles/stitches.config";

export type TextProps = React.ComponentPropsWithoutRef<typeof Text>;
export type HeadingProps = React.ComponentPropsWithoutRef<typeof Heading>;

export const Text = styled("p", {
  fontFamily: "$body",
  lineHeight: "$tall",
  m: "$0",
  "@sm": {
    fontSize: "$md",
  },

  "@md": {
    fontSize: "$lg",
  },
});

export const Heading = styled("h1", {
  fontFamily: "$header",
  lineHeight: "$tall",
  my: "$0",
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
