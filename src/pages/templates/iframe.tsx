import Integraflow, { Survey } from "@integraflow/web";
import React, { useEffect, useRef, useState } from "react";

const IntegraflowSurvey = () => {
  const [survey, setSurvey] = useState<Survey | undefined>(undefined);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === "survey") {
        setSurvey(event.data.survey);
      }
    };

    window.addEventListener("message", handleMessage);

    window.parent.postMessage({
      status: "ready",
    });

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  useEffect(() => {
    if (!survey) return;
    const integraflow = Integraflow.init({
      surveys: [survey],
    });

    integraflow.showSurvey(survey.id as string);
    return () => {
      integraflow.closeSurvey(survey.id as string);
    };
  }, [survey]);

  return <div> </div>;
};

export default IntegraflowSurvey;
