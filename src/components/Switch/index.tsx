import { useState } from "react";

const Switch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleSwitch = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleToggleSwitch}
          className="sr-only"
        />
        <div
          className={`block bg-gray-400 w-10 h-6 rounded-full ${isChecked ? "bg-blue-600" : "bg-gray-400"}`}
        />
        <div
          className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all ease-in-out ${
            isChecked ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </div>
    </label>
  );
};

export default Switch;
