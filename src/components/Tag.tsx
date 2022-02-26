import { styled } from "styles/stitches.config";

type TagProps = React.PropsWithChildren<{
  type?: "React" | "Next.js" | "CSS";
}>;

const StyledTag = styled("div", {
  display: "inline-flex",
  width: "min-content",
  br: "$md",
  px: "$2",
  lineHeight: 1.5,
  backgroundColor: "$primary",
  color: "$gray2",
  fontWeight: "$medium",
});

export default function Tag(props: TagProps) {
  return <StyledTag>{props.children}</StyledTag>;
}
