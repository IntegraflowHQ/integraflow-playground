import React, { Dispatch, SetStateAction, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { surveyCategories } from "@/utils/surveyCategories";
import { librarySurveys } from "@/utils/librarySurvey";
import { LibrarySurvey } from "@/types";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";

type Props = {
  setLibrary: Dispatch<SetStateAction<LibrarySurvey[]>>;
  setActiveCategory: Dispatch<SetStateAction<string | undefined>>;
  activeCategory: string | undefined;
};

export const HomeSidebar = ({
  setLibrary,
  setActiveCategory,
  activeCategory,
}: Props) => {
  const [accordionValue, setAccordionValue] = useState<string | undefined>(
    undefined
  );

  const filterCategories = (options: {
    category: number | "all categories";
    subcategory?: number;
  }) => {
    const { category, subcategory } = options;
    setActiveCategory(
      surveyCategories.find((cat) => cat.id === category)?.name
    );

    if (category === "all categories") {
      setLibrary(librarySurveys);
      setActiveCategory("all categories");
      return librarySurveys;
    }

    let filteredTemplates = librarySurveys;
    filteredTemplates = filteredTemplates.filter((template) =>
      template.category_ids.includes(category)
    );

    if (subcategory) {
      filteredTemplates = filteredTemplates.filter((template) =>
        template.subcategory_ids?.includes(subcategory)
      );
    }

    setLibrary(filteredTemplates);
  };

  const [showSubcategories, setShowSubcategories] = useState(true);

  return (
    <>
      <h1 className="text-3xl p-6">Playground</h1>
      <div className="px-6 space-y-4">
        <Accordion
          value={accordionValue}
          collapsible={true}
          type="single"
          onValueChange={(value) => setAccordionValue(value)}
        >
          <AccordionItem key="all" value="all categories">
            <AccordionTrigger
              className="category-trigger w-full mb-3"
              onClick={() => filterCategories({ category: "all categories" })}
            >
              <div className="flex justify-between items-center bg-[#eee] w-full text-left p-2 rounded-md hover:bg-[#d9cff2]">
                <span className="w-full">All categories</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="subcategory-content"></AccordionContent>
          </AccordionItem>
          {surveyCategories.map((category) => (
            <AccordionItem key={category.id} value={`${category.id}`}>
              <AccordionTrigger
                className="category-trigger w-full mb-3"
                onClick={() => filterCategories({ category: category.id })}
              >
                <div className="flex justify-between items-center bg-[#eee] w-full text-left p-2 rounded-md hover:bg-[#d9cff2]">
                  <span className="w-full">{category.name}</span>
                  <span
                    onClick={() => {
                      setShowSubcategories(!showSubcategories);
                      setAccordionValue(0);
                    }}
                    className="p-1 bg-[#dfd6f3] rounded"
                  >
                    {accordionValue === `${category.id}` ? (
                      <ChevronUp size={19} />
                    ) : (
                      <ChevronDown size={19} />
                    )}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="subcategory-content">
                <ul>
                  {category.subcategories.map((subcategory) => (
                    <li key={subcategory.id}>
                      <button
                        className="flex text-[.9rem] justify-between w-full p-1.5"
                        onClick={() =>
                          filterCategories({
                            category: category.id,
                            subcategory: subcategory.id,
                          })
                        }
                      >
                        <span>{subcategory.name}</span>
                        <span className="text-[#747776]">
                          {subcategory.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};
