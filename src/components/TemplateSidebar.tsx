import { ArrowLeftCircle, ChevronDown, ChevronUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import ColorPicker from "./ColorPicker";
import { LibrarySurvey, PlacementTypes, Template, ThemeOption } from "@/types";
import { Theme } from "@integraflow/web";

import * as Popover from "@radix-ui/react-popover";
import Link from "next/link";
import { useRouter } from "next/router";
import { librarySurveys } from "@/utils/librarySurvey";
import ToggleSwitch from "./ToggleSwitch";

const placementOptions = [
  { id: 1, value: PlacementTypes.BOTTOM_LEFT, label: "Bottom left" },
  { id: 2, value: PlacementTypes.BOTTOM_RIGHT, label: "Bottom right" },
  { id: 3, value: PlacementTypes.CENTER, label: "Center" },
  { id: 4, value: PlacementTypes.TOP_LEFT, label: "Top left" },
  { id: 5, value: PlacementTypes.TOP_RIGHT, label: "Top right" },
];

const themeOptions: Theme = {
  question: "#050505",
  answer: "#E6E6E6",
  button: "#050505",
  background: "#ffffff",
  progressBar: "#050505",
};

type Props = {
  activeTemplate: Template | undefined;
  setActiveTemplate: React.Dispatch<React.SetStateAction<Template | undefined>>;
};

export const TemplateSidebar = ({
  activeTemplate,
  setActiveTemplate,
}: Props) => {
  const router = useRouter();
  const id = router.query.id;

  const [showSettings, setShowSettings] = useState(false);
  const [openPlacement, setOpenPlacement] = useState(false);
  const [openTheme, setOpenTheme] = useState(false);

  const [showProgressBar, setShowProgressBar] = useState(true);
  const [showBranding, setShowBranding] = useState(true);
  const [showClose, setShowClose] = useState(true);

  const [submitText, setSubmitText] = useState<string>(
    activeTemplate?.survey.settings.submitText ?? "Submit"
  );
  const [templateDetails, setTemplateDetails] = useState<
    LibrarySurvey | undefined
  >(undefined);

  const updateSubmitText = (value: string | undefined) => {
    if (!activeTemplate) return;

    const updatedTemplate = { ...activeTemplate };
    updatedTemplate.survey.settings.submitText = value;
    setActiveTemplate(updatedTemplate);
  };

  const changePlacement = (value: PlacementTypes) => {
    if (!activeTemplate) return;

    const updatedTemplate = { ...activeTemplate };
    updatedTemplate.survey.settings.placement = value;

    setActiveTemplate(updatedTemplate);
  };

  const toggleProgressbar = (value: boolean) => {
    if (!activeTemplate) return;

    const updatedTemplate = { ...activeTemplate };
    updatedTemplate.survey.settings.showProgressBar = value;

    setActiveTemplate(updatedTemplate);
  };
  const toggleClose = (value: boolean) => {
    if (!activeTemplate) return;

    const updatedTemplate = { ...activeTemplate };
    updatedTemplate.survey.settings.close = value;

    setActiveTemplate(updatedTemplate);
  };
  const toggleBranding = (value: boolean) => {
    if (!activeTemplate) return;

    const updatedTemplate = { ...activeTemplate };
    updatedTemplate.survey.settings.showBranding = value;

    setActiveTemplate(updatedTemplate);
  };

  const setTheme = (option: ThemeOption, value: string) => {
    if (!activeTemplate) return;

    const updatedTemplate = { ...activeTemplate };

    if (!updatedTemplate.survey.theme) {
      updatedTemplate.survey.theme = {};
    }

    updatedTemplate.survey.theme[option] = value;

    setActiveTemplate(updatedTemplate);
  };

  const getTemplateDetails = () => {
    if (!id) return;
    const survey = librarySurveys.find((item) => {
      return item.id === (id as string);
    });
    setTemplateDetails(survey);
  };

  useEffect(() => {
    getTemplateDetails();
  }, [id]);

  return (
    <div className="p-6 space-y-4">
      <Link href={"/"} className="flex space-x-3">
        <span>
          <ArrowLeftCircle />
        </span>
        <span>Back to All Surveys</span>
      </Link>
      <p className="text-3xl">{templateDetails?.name}</p>

      <div>
        <p className="font-semibold">Objectives</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>{templateDetails?.points_count} questions</li>
          {templateDetails?.library_quick_tips.map((tip) => {
            return <li className="text-base">{tip}</li>;
          })}
        </ul>
      </div>

      <div>
        <p
          className="flex justify-between items-center  bg-[#eee] p-2 rounded-md mb-2"
          onClick={() => setShowSettings(!showSettings)}
        >
          <span>Settings</span>
          <span>
            {showSettings ? <ChevronUp size={19} /> : <ChevronDown size={19} />}
          </span>
        </p>
        {showSettings && (
          <>
            <ul className="px-2 space-y-2">
              <Popover.Root open={openTheme} onOpenChange={setOpenTheme}>
                <Popover.Trigger
                  className={` flex items-center space-x-6 rounded-md bg-[#eee] p-2`}
                >
                  <span>Theme</span>
                  <span>
                    {openTheme ? (
                      <ChevronUp size={19} />
                    ) : (
                      <ChevronDown size={19} />
                    )}
                  </span>
                </Popover.Trigger>
                <Popover.Anchor />
                <Popover.Portal>
                  <Popover.Content
                    align="start"
                    className="shadow-lg border bg-[#fff] px-3 pt-0 "
                  >
                    <Popover.Close />
                    <ul>
                      {Object.keys(themeOptions || {}).map((optName) => {
                        return (
                          <li key={optName} className="flex mb-3 items-center">
                            <span className="capitalize">
                              {optName !== "progressBar"
                                ? optName
                                : "progress bar"}
                              :
                            </span>
                            <span>
                              <ColorPicker
                                onChange={(color: string) => {
                                  setTheme(optName as ThemeOption, color);
                                }}
                                selectedColor={
                                  activeTemplate?.survey?.theme &&
                                  activeTemplate.survey.theme[
                                    optName as keyof Theme
                                  ]!
                                    ? activeTemplate.survey.theme[
                                        optName as keyof Theme
                                      ]!
                                    : themeOptions[optName as keyof Theme]
                                }
                              />
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </Popover.Content>
                </Popover.Portal>
              </Popover.Root>
              <li>
                <Popover.Root
                  open={openPlacement}
                  onOpenChange={setOpenPlacement}
                >
                  <Popover.Trigger
                    className={` flex items-center space-x-6 rounded-md bg-[#eee] p-2 mb-1`}
                  >
                    <span>Placement</span>
                    <span>
                      {openPlacement ? (
                        <ChevronUp size={19} />
                      ) : (
                        <ChevronDown size={19} />
                      )}
                    </span>
                  </Popover.Trigger>
                  <Popover.Anchor />
                  <Popover.Portal>
                    <Popover.Content
                      align="start"
                      className="shadow-lg border bg-[#fff] px-3 pt-0 w-[13rem]  "
                    >
                      <Popover.Close />
                      <ul>
                        {placementOptions.map((option) => {
                          return (
                            <>
                              <p
                                key={option.id}
                                onClick={() => {
                                  changePlacement(option.value);
                                }}
                                className="p-2 hover:bg-[#e2d8f8]"
                              >
                                {option.label}
                              </p>
                              <hr />
                            </>
                          );
                        })}
                      </ul>
                    </Popover.Content>
                  </Popover.Portal>
                </Popover.Root>
              </li>
              <ToggleSwitch
                onChange={() => {
                  setShowProgressBar(!showProgressBar);
                  toggleProgressbar(!showProgressBar);
                }}
                text="Show Progress Bar"
              />
              <ToggleSwitch
                onChange={() => {
                  setShowBranding(!showBranding);
                  toggleBranding(!showBranding);
                }}
                text="Show Branding"
              />
              <ToggleSwitch
                onChange={() => {
                  setShowClose(!showClose);
                  toggleClose(!showClose);
                }}
                text="Show Close"
              />
              <div className="space-x-1">
                <label htmlFor="submit_text">Submit Text:</label>
                <input
                  type="text"
                  name="submit_text"
                  className="border p-1 focus:outline-none rounded-md focus:border-[#6841C6]"
                  value={submitText}
                  onChange={(e) => {
                    setSubmitText(e.target.value);
                    updateSubmitText(e.target.value);
                  }}
                  placeholder="Enter your text"
                />
              </div>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};
