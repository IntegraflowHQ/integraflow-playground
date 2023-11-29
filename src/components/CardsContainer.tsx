import React from "react";
import { useRouter } from "next/router";
import { LibrarySurvey } from "@/types";

type Props = {
  library: LibrarySurvey[];
  activeCategory: string | undefined;
};

export const CardsContainer = ({ library, activeCategory }: Props) => {
  const router = useRouter();

  return (
    <div className="flex-1 p-6 h-screen overflow-y-auto">
      <div className="text-center m-8">
        <h1 className="text-3xl">Templates Library</h1>
        <p></p>
      </div>

      <h1 className="capitalize font-semibold">{activeCategory}</h1>
      <hr className="mb-4" />
      <ul className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3  gap-5">
        {library.map((survey) => {
          return (
            <li
              key={survey.id}
              onClick={() => router.push(`templates?id=${survey.id}`)}
              className="flex flex-col cursor-pointer border rounded-md min-h-[14rem] hover:border-[#898a8a] transition-all ease-in-out duration-1000"
              style={{ height: "fit-content" }}
            >
              <p className="bg-[#6941C6] h-[3.5rem] font-semibold text-sm rounded-tl-md rounded-tr-md text-white p-3">
                {survey.name}
              </p>
              <div className="flex flex-1 flex-col text-sm justify-between h-">
                <p className="p-2 ">{survey.first_point}</p>
                <div>
                  <hr />
                  <p className="p-3 text-[#7B7E7D] text-sm">
                    {survey.points_count} questions
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
