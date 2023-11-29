import { Inter } from "next/font/google";
import { CardsContainer } from "@/components/CardsContainer";
import { Sidebar } from "@/components/Sidebar";
import { HomeSidebar } from "@/components/HomeSidebar";
import { librarySurveys } from "@/utils/librarySurvey";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [library, setLibrary] = useState(librarySurveys);
  const [activeCategory, setActiveCategory] = useState<string | undefined>(
    "all categories"
  );

  const [width, setWidth] = useState<number>();
  const isMobile = width <= 1024;

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    if (!window) {
      return;
    }
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  if (isMobile)
    return (
      <div className="w-full h-full flex justify-center items-center align-middle px-8">
        <div>
          <h1>This demo is not supported on small devices</h1>
          <br />
          <a href="https://useintegraflow.com" className="text-blue-500">
            Return to Integraflow
          </a>
        </div>
      </div>
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
