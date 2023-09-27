import React, { useState, useEffect, useRef } from 'react';
import { SketchPicker, ColorResult } from 'react-color';

interface ColorPickerProps {
  defaultColor?: string;
  onChange: (color: string) => void;
  selectedColor: string | undefined;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  defaultColor = '#124CA4',
  onChange,
  selectedColor = '#ffffff',
}) => {
  const [color, setColor] = useState(defaultColor);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const colorPickerRef = useRef<HTMLDivElement | null>(null);

  const handleColorChange = (color: ColorResult) => {
    setColor(color.hex);
    onChange(color.hex);
  };

  const handleColorPickerClick = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      colorPickerRef.current &&
      !colorPickerRef.current.contains(event.target as Node)
    ) {
      setShowColorPicker(false);
    }
  };

  useEffect(() => {
    if (showColorPicker) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showColorPicker]);

  return (
    <div className="relative w-1/2" ref={colorPickerRef}>
      <button
        className="flex items-center text-sm space-x-2 px-1 py-2 rounded-md text-shippy-gray-tx font-semibold bg-transparent border"
        onClick={handleColorPickerClick}
      >
        <span className="uppercase">{selectedColor}</span>
        <span
          className="h-3 w-3 rounded-full shadow-md"
          style={{ backgroundColor: selectedColor }}
        ></span>
      </button>
      {showColorPicker && (
        <div className="absolute z-10 top-15 left-0">
          <SketchPicker color={color} onChangeComplete={handleColorChange} />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
