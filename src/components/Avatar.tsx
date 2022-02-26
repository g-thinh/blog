import * as RadixAvatar from "@radix-ui/react-avatar";
import { styled } from "styles/stitches.config";

const StyledAvatar = styled(RadixAvatar.Root, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  size: 45,
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

export default function Avatar() {
  return (
    <StyledAvatar>
      <StyledImage src="/images/profile.png" alt="Gia Thinh Nguyen" />
      <StyledFallback delayMs={300}>GT</StyledFallback>
    </StyledAvatar>
  );
}
