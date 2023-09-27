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
              className="w-[32%] border h-fit rounded-md min-h-[10rem]"
            >
              <p className="bg-[#6941C6] rounded-tl-md rounded-tr-md text-white p-3">
                {survey.name}
              </p>
              <div className="p-2">
                <p>{survey.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <button className="relative overflow-hidden group">
        <span className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-800"></span>
        <span className="relative z-10 text-white font-bold">Hover Me</span>
      </button>
    </div>
  );
};
