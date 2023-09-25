import { createContext, useState, useEffect } from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: (newTheme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const initialTheme = localStorage.getItem("selectedTheme") || "";
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
  };
  useEffect(() => {
    window.localStorage.setItem("selectedTheme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
