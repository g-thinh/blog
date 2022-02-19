import { useTheme } from "next-themes";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { theme as stitchesTheme } from "styles/stitches.config";

export default function ToggleColorMode() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const handleColorChange = () =>
    setTheme(theme === "light" ? "dark" : "light");

  return (
    <DarkModeSwitch
      moonColor={stitchesTheme.colors.primary.toString()}
      sunColor={stitchesTheme.colors.amber7.toString()}
      size={20}
      checked={isDark}
      onChange={handleColorChange}
    />
  );
}
