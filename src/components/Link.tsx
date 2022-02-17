import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { Text } from "./Typography";
import { styled } from "styles/stitches.config";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

enum LinkVariants {
  Text = "text",
}

const StyledIcon = styled(ExternalLinkIcon, {
  ml: "$1",
  size: 14,
});

export const Anchor = styled("a", {
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  textDecoration: "none",
  [`& ${Text}:hover`]: {
    color: "$primary",
    textDecoration: "underline",

    [`~ ${StyledIcon}`]: {
      color: "$primary",
    },
  },

  variants: {
    type: {
      [LinkVariants.Text]: {
        textDecoration: "underline",
      },
    },
  },
});

type LinkProps = React.PropsWithChildren<NextLinkProps> & {
  type?: LinkVariants;
};

export default function Link({ children, type, ...props }: LinkProps) {
  if (typeof props.href === "string" && props.href.match(/^(https?:)?\/\//)) {
    return (
      <Anchor href={props.href} type={type} target="_blank">
        <Text>{children}</Text>
        <StyledIcon />
      </Anchor>
    );
  }

  return (
    <NextLink passHref {...props}>
      <Anchor type={type}>
        <Text>{children}</Text>
      </Anchor>
    </NextLink>
  );
}
