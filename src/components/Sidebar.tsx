import React, { ReactNode } from "react";
import WaitlistModal from "./WaitlistModal";

type Props = {
  children: ReactNode;
};

export const Sidebar = ({ children }: Props) => {
  return (
    <div className="w-full max-w-[350px] flex flex-col justify-between border-r h-screen border">
      <div className="flex-1 overflow-y-scroll">{children}</div>
      <div className="h-18">
        <hr />
        <div className="p-4">
          <p className="text-center mb-1 text-sm text-[#7B7E7D]">
            Create your survey?
          </p>
          <WaitlistModal />
        </div>
      </div>
    </div>
  );
};
