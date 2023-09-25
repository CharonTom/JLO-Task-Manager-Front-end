import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const initialTheme = localStorage.getItem("selectedTheme") || "";
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = (newTheme) => {
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
