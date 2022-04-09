import * as RadixAvatar from "@radix-ui/react-avatar";
import { CSS, styled } from "styles/stitches.config";

const StyledAvatar = styled(RadixAvatar.Root, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  br: "$full",
  backgroundColor: "$gray6",
});

const StyledImage = styled(RadixAvatar.Image, {
  height: "$full",
  width: "$full",
  objectFit: "cover",
  borderRadius: "inherit",
});

const StyledFallback = styled(RadixAvatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$gray6",
  color: "$text",
  fontSize: "$md",
  fontWeight: 600,
});

type AvatarProps = {
  src?: string;
  size?: CSS["size"];
};

export default function Avatar({
  src = "https://i.imgur.com/20iJ7PQ.png",
  size = 45,
}: AvatarProps) {
  return (
    <StyledAvatar>
      <StyledImage src={src} alt="Gia Thinh Nguyen" css={{ size }} />
      <StyledFallback delayMs={300}>GT</StyledFallback>
    </StyledAvatar>
  );
}
