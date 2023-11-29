import React from "react";
import { Loader2 } from "lucide-react";

const GlobalSpinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center ml-[350px] items-center bg-gray-200 opacity-75 z-50">
      <div className="flex items-center space-x-2 text-[#6941C6] animate-spin">
        <Loader2 size={60} />
      </div>
    </div>
  );
};

export default GlobalSpinner;
