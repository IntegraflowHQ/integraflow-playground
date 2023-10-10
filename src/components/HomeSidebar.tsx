import React, { Dispatch, SetStateAction, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { surveyCategories } from "@/utils/surveyCategories";
import { librarySurveys } from "@/utils/librarySurvey";
import { LibrarySurvey } from "@/types";

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
      <ul className="px-6 space-y-4">
        <li onClick={() => filterCategories({ category: "all categories" })}>
          <button className="flex justify-between items-center bg-[#eee] w-full text-left p-2 rounded-md hover:bg-[#d9cff2]">
            <span className="w-full">All categories</span>
          </button>
        </li>
        {surveyCategories.map((category) => {
          return (
            <div key={category.name}>
              <li
                onClick={() =>
                  filterCategories({
                    category: category.id,
                  })
                }
                className="mb-3"
              >
                <button className="flex justify-between items-center bg-[#eee] w-full text-left p-2 rounded-md hover:bg-[#d9cff2]">
                  <span className="w-full">{category.name}</span>
                  <span
                    onClick={() => setShowSubcategories(!showSubcategories)}
                    className="p-1 bg-[#dfd6f3] rounded"
                  >
                    {showSubcategories && activeCategory === category.name ? (
                      <ChevronUp size={19} />
                    ) : (
                      <ChevronDown size={19} />
                    )}
                  </span>
                </button>
              </li>
              {showSubcategories && (
                <ul
                  className={` ${
                    activeCategory === category.name ? "block" : "hidden"
                  } mx-3`}
                >
                  {category.subcategories.map((subcategory) => {
                    return (
                      <button
                        className="flex text-[.9rem] justify-between w-full p-1.5"
                        key={subcategory.name}
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
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </ul>
    </>
  );
};
