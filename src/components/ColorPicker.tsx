import React, { useState } from 'react';
import { SketchPicker, ColorResult } from 'react-color';
import * as Popover from '@radix-ui/react-popover';

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

  const handleColorChange = (color: ColorResult) => {
    setColor(color.hex);
    onChange(color.hex);
  };

  return (
    <Popover.Root>
      <Popover.Trigger>
        <button className="flex items-center text-sm space-x-2 px-1 py-2 rounded-md text-shippy-gray-tx font-semibold bg-transparent border">
          <span className="uppercase">{selectedColor}</span>
          <span
            className="h-3 w-3 rounded-full shadow-md"
            style={{ backgroundColor: selectedColor }}
          ></span>
        </button>
      </Popover.Trigger>
      <Popover.Anchor />
      <Popover.Portal>
        <Popover.Content
          align="start"
          className="border bg-[#fff] px-3 pt-0 w-[13rem]"
        >
          <SketchPicker color={color} onChangeComplete={handleColorChange} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default ColorPicker;
