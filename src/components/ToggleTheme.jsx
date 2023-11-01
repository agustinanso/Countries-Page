import Moonsvg from "./icons/Moonsvg";
import Sunsvg from "./icons/Sunsvg";

import { useState, useEffect } from "react";

function ToggleTheme() {
  const [themePag, setThemePag] = useState("");
  const buttonTheme = themePag === "dark" ? <Sunsvg /> : <Moonsvg />;

  useEffect(() => {
    if (themePag) {
      localStorage.setItem("color-theme", themePag);
    }
    const storedTheme = localStorage.getItem("color-theme");
    if (
      storedTheme === "dark" ||
      (!storedTheme && window.matchMedia("prefers-color-scheme: dark").matches)
    ) {
      document.querySelector("body").classList.add("dark");
      setThemePag("dark");
    } else {
      document.querySelector("body").classList.remove("dark");
      setThemePag("light");
    }
  }, [themePag]);

  const handleThemeColor = () => {
    setThemePag((prevThemePag) => (prevThemePag === "light" ? "dark" : "light"));
  };
  return (
    <div>
      <button onClick={handleThemeColor}> {buttonTheme} </button>
    </div>
  );
}

export default ToggleTheme;
