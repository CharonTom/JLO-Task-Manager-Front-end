import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeSelector = () => {
  const { toggleTheme } = useContext(ThemeContext);

  const handleThemeChange = (newTheme: string) => {
    toggleTheme(newTheme);
  };

  return (
    <div>
      <button
        className="w-10 h-10 bg-blue-200 m-2 border border-1 border-black rounded-full"
        onClick={() => handleThemeChange("")}
      ></button>
      <button
        className="w-10 h-10 bg-red-200 m-2 border border-1 border-black rounded-full"
        onClick={() => handleThemeChange("theme-red")}
      ></button>
      <button
        className="w-10 h-10 bg-yellow-200 m-2 border border-1 border-black rounded-full"
        onClick={() => handleThemeChange("theme-yellow")}
      ></button>
    </div>
  );
};

export default ThemeSelector;
