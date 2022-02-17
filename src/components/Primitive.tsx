import { styled } from "styles/stitches.config";

export const Box = styled("div", {});

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
