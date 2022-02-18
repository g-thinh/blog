import { styled } from "styles/stitches.config";
import { baseTextStyles } from "./Typography";

export const Box = styled("div", {});
export type BoxProps = React.ComponentPropsWithoutRef<typeof Box>;

export const Flex = styled(Box, {
  display: "flex",
  variants: {
    stack: {
      column: {
        flexDirection: "column",
      },
    },
  },
});

export type ListProps = React.ComponentPropsWithoutRef<typeof List>;
export const List = styled("ul", {
  ml: "$5",
  listStyleType: "disc",
  "::marker": {
    fontFamily: "$body",
  },
});

export type ListItemProps = React.ComponentPropsWithoutRef<typeof ListItem>;
export const ListItem = styled("li", baseTextStyles);
