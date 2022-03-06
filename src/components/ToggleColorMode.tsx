import { useTheme } from "next-themes";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { styled, theme as stitchesTheme } from "styles/stitches.config";

const StyledButton = styled("button", {
  background: "none",
  color: "inherit",
  border: "1px solid transparent",
  padding: "$1",
});

export default function ToggleColorMode() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const handleColorChange = () =>
    setTheme(theme === "light" ? "dark" : "light");

  return (
    <StyledButton
      aria-label={`Change theme color to ${
        theme === "light" ? "dark" : "light"
      }`}
      onKeyDown={(e) => e.code === "Enter" && handleColorChange()}
    >
      <DarkModeSwitch
        aria-hidden
        moonColor={stitchesTheme.colors.primary.toString()}
        sunColor={stitchesTheme.colors.amber7.toString()}
        size={24}
        checked={isDark}
        onChange={handleColorChange}
      />
    </StyledButton>
  );
}
