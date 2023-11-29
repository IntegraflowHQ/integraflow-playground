import { Inter } from "next/font/google";
import { CardsContainer } from "@/components/CardsContainer";
import { Sidebar } from "@/components/Sidebar";
import { HomeSidebar } from "@/components/HomeSidebar";
import { librarySurveys } from "@/utils/librarySurvey";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [library, setLibrary] = useState(librarySurveys);
  const [activeCategory, setActiveCategory] = useState<string | undefined>(
    "all categories"
  );

  return (
    <main className={`flex w-screen h-screen ${inter.className}`}>
      <Sidebar>
        <HomeSidebar
          setLibrary={setLibrary}
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        />
      </Sidebar>
      <CardsContainer library={library} activeCategory={activeCategory} />
    </main>
  );
}
