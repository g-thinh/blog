import { ExternalLinkIcon } from "@radix-ui/react-icons";
import type * as Stitches from "@stitches/react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { styled } from "styles/stitches.config";
import { baseTextStyles } from "./Typography";

enum LinkVariantsEnum {
  Text = "text",
}

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
      [LinkVariantsEnum.Text]: {
        color: "$primary",
        "&:hover": {
          textDecoration: "underline",
          textDecorationThickness: 1,
        },
      },
    },
  },
});

export type LinkProps = React.PropsWithChildren<NextLinkProps> & {
  type?: LinkVariantsEnum;
  css?: Stitches.CSS;
};

export default function Link({ children, type, css, ...props }: LinkProps) {
  if (typeof props.href === "string" && props.href.match(/^(https?:)?\/\//)) {
    return (
      <Anchor href={props.href} type={type} target="_blank" css={css}>
        {children}
      </Anchor>
    );
  }

  return (
    <NextLink passHref {...props}>
      <Anchor type={type} css={css}>
        {children}
      </Anchor>
    </NextLink>
  );
}
