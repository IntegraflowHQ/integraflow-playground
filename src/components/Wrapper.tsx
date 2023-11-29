import React, { Ref, forwardRef } from "react";

export const Wrapper = forwardRef((_, ref: Ref<HTMLIFrameElement>) => {
  return (
    <iframe
      className="flex-1"
      id="surveyFrame"
      src={`/templates/iframe`}
      ref={ref}
      style={{
        backgroundImage: 'url("background.png")',
        backgroundPosition: "center",
      }}
    />
  );
});

Wrapper.displayName = "Wrapper";
