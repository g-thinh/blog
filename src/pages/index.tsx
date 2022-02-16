import type { NextPage } from "next";
import { Button, Paragraph, Box, useThemeUI } from "theme-ui";
import { useTheme } from "styles/theme";

export default function Home() {
  const { theme } = useTheme();
  return (
    <Box px={5}>
      <Button>Hello</Button>
      <Paragraph>Hello Again</Paragraph>
    </Box>
  );
}
