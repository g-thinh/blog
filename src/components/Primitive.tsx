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

export const Grid = styled(Box, {
  display: "grid",
  variants: {
    type: {
      basic: {
        gap: "$3",
        gridTemplateColumns: "repeat(2,1fr)",
        "@md": {
          gridTemplateColumns: "repeat(3,1fr)",
        },
      },
    },
  },
});

export const Divider = styled("hr", {
  my: "$4",
  mx: "auto",
  width: "100%",
  border: "2px solid",
  borderRadius: "$2xl",
  borderColor: "$gray4",
});

export type ListProps = React.ComponentPropsWithoutRef<typeof List>;
export const List = styled("ul", {
  display: "flex",
  flexDirection: "column",
  gap: "$2",

  ml: "$5",
  listStyleType: "disc",
  "::marker": {
    fontFamily: "$body",
  },

  "@lg": {
    px: "$8",
  },
});

export type ListItemProps = React.ComponentPropsWithoutRef<typeof ListItem>;
export const ListItem = styled("li", baseTextStyles);
