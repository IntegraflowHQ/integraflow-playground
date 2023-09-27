import React, { useState } from 'react';
import { surveyCategories } from '@/utils/templates';
import { useDashboard } from '@/context';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const Sidebar = () => {
  const { filterCategories, templates, activeCategory } = useDashboard();

  const [showSubcategories, setShowSubcategories] = useState(false);

  return (
    <div className="w-[300px] border-r">
      <h1 className="text-3xl p-6">Playground</h1>
      <ul className="px-6 space-y-4">
        <li
          onClick={() => {
            filterCategories({
              category: 'all categories',
            });
          }}
        >
          <button className="bg-[#eee] w-full text-left p-2 rounded-md hover:bg-[#d9cff2]">
            All Surveys
          </button>
        </li>

        {surveyCategories.map((category) => {
          return (
            <div key={category.name}>
              <li
                onClick={() =>
                  filterCategories({
                    category: category.name,
                  })
                }
                className="mb-3"
              >
                <button className="flex justify-between items-center bg-[#eee] w-full text-left p-2 rounded-md hover:bg-[#d9cff2]">
                  <span
                    className="w-full"
                    onClick={() => setShowSubcategories(true)}
                  >
                    {category.name}
                  </span>
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
                    activeCategory === category.name ? 'block' : 'hidden'
                  } ml-5`}
                >
                  {category.subcategories.map((subcategory) => {
                    return (
                      <button
                        className="block p-1.5 pl-0"
                        key={subcategory}
                        onClick={() =>
                          filterCategories({
                            category: category.name,
                            subcategory: subcategory,
                          })
                        }
                      >
                        {subcategory}
                      </button>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
};
