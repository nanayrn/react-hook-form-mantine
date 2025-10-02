import { createTheme, type MantineThemeOverride } from "@mantine/core";
import paletteTheme from "./palette";

const theme: MantineThemeOverride = createTheme({
  ...paletteTheme,
});

export default theme;
