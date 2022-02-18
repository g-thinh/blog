import { ExternalLinkIcon } from "@radix-ui/react-icons";
import type * as Stitches from "@stitches/react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { styled } from "styles/stitches.config";
import { baseTextStyles } from "./Typography";

enum LinkVariants {
  Text = "text",
}

const StyledIcon = styled(ExternalLinkIcon, {
  ml: "$1",
  size: 14,
});

export const Anchor = styled("a", baseTextStyles, {
  color: "$text",
  display: "inline-flex",
  alignItems: "center",
  textDecoration: "none",
  [`&:hover`]: {
    color: "$primary",
    textDecoration: "underline",

    [`~ ${StyledIcon}`]: {
      color: "$primary",
    },
  },

  variants: {
    type: {
      [LinkVariants.Text]: {
        color: "$primary",
        [`& p:hover`]: {
          textDecoration: "underline",
        },
      },
    },
  },
});

type LinkProps = React.PropsWithChildren<NextLinkProps> & {
  type?: LinkVariants;
  css?: Stitches.CSS;
};

export default function Link({ children, type, css, ...props }: LinkProps) {
  if (typeof props.href === "string" && props.href.match(/^(https?:)?\/\//)) {
    return (
      <Anchor href={props.href} type={type} target="_blank" css={css}>
        {children}
        <StyledIcon />
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
