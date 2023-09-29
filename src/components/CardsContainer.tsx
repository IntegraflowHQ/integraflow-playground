import { useDashboard } from '@/context';
import { useRouter } from 'next/router';
import React from 'react';

export const CardsContainer = () => {
  const { templates, activeCategory } = useDashboard();

  const router = useRouter();

  return (
    <div className="flex-1 p-6">
      <div className="text-center m-8">
        <h1 className="text-3xl">Templates Library</h1>
      </div>

      <h1 className="capitalize font-semibold">{activeCategory}</h1>
      <hr className="mb-4" />
      <ul className="flex flex-wrap gap-5">
        {templates.map((survey) => {
          return (
            <li
              key={survey.survey.id}
              onClick={() => router.push(`templates?id=${survey.survey.id}`)}
              className="cursor-pointer w-full sm:w-[45%] lg:w-[30%]  border rounded-md h-[15rem] hover:border-[#898a8a]"
            >
              <p className="bg-[#6941C6] rounded-tl-md rounded-tr-md text-white p-3">
                {survey.name}
              </p>
              <div className="flex flex-col content-between justify-between">
                <p className="p-2 h-[80%]">{survey.description}</p>
                <div className="h-[20%]">
                  <hr />
                  <p className="p-2 border ">4 questions</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
