import { Moon, Sun } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";

const SwitchTheme = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleToggleSwitch = (e: ChangeEvent) => {
    const { checked } = e.target as HTMLInputElement;
    setIsChecked(checked);

    if (checked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", checked ? "dark" : "light");
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setIsChecked(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsChecked(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <label
      className="flex items-center cursor-pointer"
      aria-label="toggle-theme-label"
    >
      <div className="relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleToggleSwitch}
          className="sr-only"
          aria-label="theme-switch"
        />
        <div
          className={`block w-12 h-6 rounded-full ${isChecked ? "bg-pink-500" : "bg-gray-400"}`}
        />
        <div
          className={`dot absolute left-0 top-0 bg-white w-6 h-6 rounded-full flex items-center justify-center transition-all ease-in-out ${
            isChecked ? "translate-x-6" : "translate-x-0"
          }`}
        >
          {isChecked ? <Moon size={16} /> : <Sun size={16} />}
        </div>
      </div>
    </label>
  );
};

export default SwitchTheme;
