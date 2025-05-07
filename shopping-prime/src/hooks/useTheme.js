import { useState, useEffect } from "react";

export function useTheme(initialTheme = "light") {
  const [currentTheme, setCurrentTheme] = useState(initialTheme);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `/themes/lara-${currentTheme}-cyan/theme.css`;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { currentTheme, toggleTheme };
}
