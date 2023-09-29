import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Sidebar = ({ children }: Props) => {
  return (
    <div className="w-full max-w-[350px] flex flex-col justify-between border-r h-screen border">
      <div>{children}</div>
      <div className="">
        <hr />
        <div className="p-4">
          <p className="text-center mb-1 text-sm">Create your survey?</p>
          <button className="border-[#6841C6] text-[#6841C6] hover:text-[#5a37ac] hover:border-[#5a37ac] border-2 w-full text-center p-2 rounded-md">
            Join waitlist
          </button>
        </div>
      </div>
    </div>
  );
};
