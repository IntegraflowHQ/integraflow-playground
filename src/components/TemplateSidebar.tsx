import { useDashboard } from '@/context';
import { ArrowLeftCircle, ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';
import ColorPicker from './ColorPicker';
import { PlacementTypes } from '@/types';
import { Theme } from '@integraflow/web';

import * as Popover from '@radix-ui/react-popover';
import Link from 'next/link';

const placementOptions = [
  { id: 1, value: PlacementTypes.BOTTOM_LEFT, label: 'Bottom left' },
  { id: 2, value: PlacementTypes.BOTTOM_RIGHT, label: 'Bottom right' },
  { id: 3, value: PlacementTypes.CENTER, label: 'Center' },
  { id: 4, value: PlacementTypes.TOP_LEFT, label: 'Top left' },
  { id: 5, value: PlacementTypes.TOP_RIGHT, label: 'Top right' },
];

const themeOptions: Theme = {
  question: '#050505',
  answer: '#E6E6E6',
  button: '#050505',
  background: '#ffffff',
  progressBar: '#050505',
};

export const TemplateSidebar = () => {
  const { setTheme, activeTemplate, toggleProgressbar, changePlacement } =
    useDashboard();
  const [showProgressBar, setShowProgressBar] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [openTheme, setOpenTheme] = useState(false);
  const [openPlacement, setOpenPlacement] = useState(false);

  const handleProgressBar = () => {
    setShowProgressBar(!showProgressBar);
    toggleProgressbar(!showProgressBar);
  };

  return (
    <div className="p-6 space-y-4">
      <Link href={'/'} className="flex space-x-3">
        <span>
          <ArrowLeftCircle />
        </span>
        <span>Back to All Surveys</span>
      </Link>
      <p className="text-3xl">{activeTemplate?.name}</p>
      <p>{activeTemplate?.description}</p>
      <div>
        <p className="font-semibold">Objectives</p>
        <ul className="list-disc pl-6">
          {activeTemplate?.objectives &&
            activeTemplate?.objectives.map((objective) => {
              if (!objective) return;
              const formattedObjective = objective
                .split('_')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

              return <li key={objective}>{formattedObjective}</li>;
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
                              {optName !== 'progressBar'
                                ? optName
                                : 'progress bar'}
                              :
                            </span>
                            <span>
                              <ColorPicker
                                onChange={(color: string) => {
                                  setTheme(optName as keyof Theme, color);
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
              {/* Custom toggle switch */}
              <div className="flex items-center space-x-2 cursor-pointer">
                <span className="p-1">Show Progress Bar</span>
                <div
                  className={`w-12 h-7 bg-[#6841C6] rounded-full p-1 transition-transform duration-200 ease-in-out ${
                    showProgressBar ? 'bg-[#6841C6]' : ''
                  }`}
                  onClick={handleProgressBar}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                      showProgressBar ? 'translate-x-5' : ''
                    }`}
                  ></div>
                </div>
              </div>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};
