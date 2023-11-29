import React, { useState } from "react";

type ToggleSwitchProps = {
  initialChecked?: boolean;
  text: string;
  onChange: (isChecked: boolean) => void;
};

const ToggleSwitch = ({
  initialChecked = true,
  onChange,
  text,
}: ToggleSwitchProps) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleToggle = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onChange(newCheckedState);
  };

  return (
    <div className="flex items-center space-x-2 cursor-pointer">
      <span className="p-1">{text}</span>
      <div
        className={`w-11 h-6 bg-[#6841C6] rounded-full p-1 transition-transform duration-200 ease-in-out ${
          isChecked ? "bg-[#6841C6]" : "bg-[#eee]"
        }`}
        onClick={handleToggle}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
            isChecked ? "translate-x-5" : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
