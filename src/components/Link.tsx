import { ExternalLinkIcon } from "@radix-ui/react-icons";
import type * as Stitches from "@stitches/react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { styled } from "styles/stitches.config";
import { baseTextStyles } from "./Typography";

enum LinkVariantsEnum {
  Text = "text",
}

const StyledIcon = styled(ExternalLinkIcon, {
  ml: "$1",
  size: 14,
  "@lg": {
    size: 18,
  },
});

export const Anchor = styled("a", baseTextStyles, {
  color: "$text",
  display: "inline-flex",
  alignItems: "center",
  textDecoration: "none",
  [`&:hover`]: {
    textDecoration: "underline",
    textDecorationColor: "$primary",
    textDecorationThickness: 3,

    [`~ ${StyledIcon}`]: {
      color: "$primary",
    },
  },

  variants: {
    type: {
      [LinkVariantsEnum.Text]: {
        color: "$primary",
        [`& p:hover`]: {
          textDecoration: "underline",
        },
      },
    },
    hideExternalIcon: {
      true: {
        "svg:last-child": {
          display: "none",
        },
      },
    },
  },
});

type LinkVariants = Stitches.VariantProps<typeof Anchor>;

type LinkProps = React.PropsWithChildren<NextLinkProps> & {
  type?: LinkVariantsEnum;
  hideExternalIcon?: LinkVariants["hideExternalIcon"];
  css?: Stitches.CSS;
};

export default function Link({
  children,
  type,
  css,
  hideExternalIcon,
  ...props
}: LinkProps) {
  if (typeof props.href === "string" && props.href.match(/^(https?:)?\/\//)) {
    return (
      <Anchor
        href={props.href}
        type={type}
        hideExternalIcon={hideExternalIcon}
        target="_blank"
        css={css}
      >
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
