import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import type * as Stitches from "@stitches/react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { styled } from "styles/stitches.config";
import { baseTextStyles } from "./Typography";

export const Anchor = styled("a", baseTextStyles, {
  color: "$text",
  display: "inline-flex",
  alignItems: "center",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
    textDecorationColor: "$primary",
    textDecorationThickness: 3,
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
    <NextLink passHref {...props}>
      <Anchor type={type} css={css}>
        {children}
        <VisuallyHidden.Root>{screenReaderMessage}</VisuallyHidden.Root>
      </Anchor>
    </NextLink>
  );
}
