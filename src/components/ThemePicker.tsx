import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeSelector = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  const handleThemeChange = (newTheme) => {
    toggleTheme(newTheme);
  };

  // console.log(theme);

  return (
    <div>
      <button onClick={() => handleThemeChange("blue")}>Bleu</button>
      <button onClick={() => handleThemeChange("red")}>Rouge</button>
      <button onClick={() => handleThemeChange("yellow")}>Jaune</button>
    </div>
  );
};

export default ThemeSelector;
