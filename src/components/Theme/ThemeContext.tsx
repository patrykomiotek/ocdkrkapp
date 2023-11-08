import { createContext, useContext, useState } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

interface ThemeContextType {
  theme: Theme;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(Theme.DARK);

  const toggle = () => {
    if (theme === Theme.LIGHT) {
      setTheme(Theme.DARK);
      document.body.classList.remove("light");
    } else {
      setTheme(Theme.LIGHT);
      document.body.classList.add("light");
    }
  };

  return { theme, toggle };
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context) {
    return context;
  }
  throw new Error("Oh no! Component should be placed inside ThemeProvider");
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={useTheme()}>{children}</ThemeContext.Provider>
  );
};
