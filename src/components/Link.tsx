import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import type * as Stitches from "@stitches/react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { css, styled } from "styles/stitches.config";

const baseAnchorStyles = css({
  color: "$text",
  display: "inline-flex",
  alignItems: "center",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
    textDecorationColor: "$primary",
    textDecorationThickness: 3,
  },

  "@sm": {
    fontSize: "$lg",
  },

  "@lg": {
    fontSize: "$xl",
  },

  variants: {
    type: {
      text: {
        color: "$primary",
        "&:hover": {
          textDecoration: "underline",
          textDecorationThickness: 1,
        },
      },
      button: {
        borderRadius: "$md",
        px: "$3",
        py: "$2",
        backgroundColor: "$blue8",
        "&:hover": {
          textDecoration: "none",
          backgroundColor: "$blue7",
        },
        "&:active": {
          backgroundColor: "$blue6",
        },
      },
    },
  },
});

export const Anchor = styled("a", baseAnchorStyles);

const AnchorText = styled("span", baseAnchorStyles);

export type LinkProps = React.PropsWithChildren<NextLinkProps> & {
  type?: "button" | "text";
  screenReaderMessage?: string;
  css?: Stitches.CSS;
};

export default function Link({
  children,
  type,
  css,
  screenReaderMessage,
  ...props
}: LinkProps) {
  if (typeof props.href === "string" && props.href.match(/^(https?:)?\/\//)) {
    return (
      <Anchor href={props.href} type={type} target="_blank" css={css}>
        {children}
        <VisuallyHidden.Root>{screenReaderMessage}</VisuallyHidden.Root>
      </Anchor>
    );
  }

  return (
    <NextLink passHref style={{ textDecoration: "none" }} {...props}>
      <AnchorText type={type} css={css}>
        {children}
        <VisuallyHidden.Root>{screenReaderMessage}</VisuallyHidden.Root>
      </AnchorText>
    </NextLink>
  );
}
