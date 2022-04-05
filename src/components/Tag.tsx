import { styled } from "styles/stitches.config";

const StyledTag = styled("div", {
  display: "inline-flex",
  width: "max-content",
  whiteSpace: "nowrap",
  br: "$md",
  px: "$2",
  lineHeight: 1.5,
  backgroundColor: "$primary",
  color: "$gray2",
  fontWeight: "$medium",
});

export default function Tag(
  props: React.ComponentPropsWithRef<typeof StyledTag>
) {
  return <StyledTag {...props}>{props.children}</StyledTag>;
}
