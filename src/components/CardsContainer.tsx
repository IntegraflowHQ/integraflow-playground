import { useDashboard } from '@/context';
import { useRouter } from 'next/router';
import React from 'react';

export const CardsContainer = () => {
  const { templates, activeCategory } = useDashboard();

  const router = useRouter();

  return (
    <div className="flex-1 p-6 h-screen overflow-y-auto">
      <div className="text-center m-8">
        <h1 className="text-3xl">Templates Library</h1>
        <p></p>
      </div>

      <h1 className="capitalize font-semibold">{activeCategory}</h1>
      <hr className="mb-4" />
      <ul className="flex flex-wrap justify-between gap-5">
        {templates.map((survey) => {
          return (
            <li
              key={survey.survey.id}
              onClick={() => router.push(`templates?id=${survey.survey.id}`)}
              className="flex flex-col cursor-pointer w-full lg:w-[45%] xl:w-[30%] border rounded-md h-[15rem] hover:border-[#898a8a] transition-all ease-in-out duration-1000"
            >
              <p className="bg-[#6941C6] h-[4rem]  rounded-tl-md rounded-tr-md text-white p-3">
                {survey.name}
              </p>
              <div className="flex flex-1 flex-col justify-between h-">
                <p className="p-2 ">{survey.description}</p>
                <div>
                  <hr />
                  <p className="p-4 text-[#7B7E7D] text-sm">4 questions</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
