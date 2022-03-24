import { styled, css } from "styles/stitches.config";

export type TextProps = React.ComponentPropsWithoutRef<typeof Text>;
export type HeadingProps = React.ComponentPropsWithoutRef<typeof Heading>;

export const baseTextStyles = css({
  lineHeight: "$taller",
  fontFamily: "$body",
  fontSize: "$md",
  "@sm": {
    fontSize: "$lg",
  },

  "@lg": {
    fontSize: "$xl",
  },
});

export const Text = styled("p", baseTextStyles);

export const headingTwoStyles = css({
  fontSize: "$2xl",
  "@sm": {
    fontSize: "$3xl",
  },
  "@md": {
    fontSize: "$4xl",
  },
});

export const Heading = styled("h1", {
  fontFamily: "$header",
  lineHeight: "$short",
  fontSize: "$2xl",
  "@sm": {
    fontSize: "$3xl",
  },
  "@xl": {
    fontSize: "$4xl",
  },

  variants: {
    level: {
      two: {
        headingTwoStyles,
      },
      three: {
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
