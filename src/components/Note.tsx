import { styled } from "styles/stitches.config";
import { Box } from "./Primitive";

const StyledBox = styled(Box, {
  background: "$blue5",
  borderLeft: "6px solid",
  borderColor: "$primary",
  br: "$md",
  px: "$4",
  pt: "$2",
  pb: "$2",
  "@md": {
    pl: "$0",
    mx: "$8",
  },
  "& p:last-child": {
    mb: "$0",
  },
});

export type NoteProps = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<typeof StyledBox>
>;

export default function Note({ children, ...props }: NoteProps) {
  return <StyledBox {...props}>{children}</StyledBox>;
}
