import React, { useCallback, useEffect, createRef, useState } from "react";
import { TemplateSidebar } from "@/components/TemplateSidebar";
import { Wrapper } from "@/components/Wrapper";
import { Sidebar } from "@/components/Sidebar";
import { useRouter } from "next/router";
import { Template } from "@/types";
import GlobalSpinner from "@/components/LoadingSpinner";

const Templates = () => {
  const router = useRouter();
  const { id } = router.query;

  const [iframeReady, setIframeReady] = useState(false);

  const [activeTemplate, setActiveTemplate] = useState<Template | undefined>(
    undefined
  );

  const iframe = createRef<HTMLIFrameElement>();

  useEffect(() => {
    const getActiveTemplate = async () => {
      if (!id) return;
      const res = await fetch(`/api/survey?id=${id}`);
      const data = await res.json();
      if (!data) {
      } else if (data) {
        setActiveTemplate(data);
      }
    };
    getActiveTemplate();
  }, [id]);

  useEffect(() => {
    const sendSurvey = () => {
      if (activeTemplate?.survey && iframe.current) {
        iframe.current?.contentWindow?.postMessage(
          {
            type: "survey",
            survey: activeTemplate.survey,
          },
          "*"
        );
      }
    };
    sendSurvey();
  }, [activeTemplate, iframe, iframeReady]);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.status === "ready") {
        setIframeReady(true);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="flex">
      <Sidebar>
        <TemplateSidebar
          activeTemplate={activeTemplate}
          setActiveTemplate={setActiveTemplate}
        />
      </Sidebar>
      {iframeReady ? null : <GlobalSpinner />}
      <Wrapper ref={iframe} />
      <></>
    </div>
  );
};

export default Templates;
