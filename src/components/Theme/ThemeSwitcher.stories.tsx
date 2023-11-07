import type { Meta } from "@storybook/react";

import { ThemeSwitcher } from "./ThemeSwitcher";
import { ThemeProvider } from "./ThemeContext";

const meta = {
  title: "Components/Theme/ThemeSwitcher",
  component: ThemeSwitcher,
  // tags: ["autodocs"],
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;

export const _ThemeSwitcher = () => (
  <ThemeProvider>
    <ThemeSwitcher />
  </ThemeProvider>
);
