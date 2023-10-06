import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const Wrapper = () => {
  const [skeletonHeights, setSkeletonHeights] = useState<number[]>([]);

  useEffect(() => {
    const calculateSkeletonHeights = () => {
      const numSkeletons = 15;

      const heights: number[] = Array.from(
        { length: numSkeletons },
        () => Math.floor(Math.random() * 40) + 12
      );
      setSkeletonHeights(heights);
    };

    calculateSkeletonHeights();

    window.addEventListener("resize", calculateSkeletonHeights);

    return () => {
      window.removeEventListener("resize", calculateSkeletonHeights);
    };
  }, []);

  return (
    <div className="p-6 w-full">
      {skeletonHeights.map((height, index) => (
        <Skeleton
          key={index}
          height={height}
          enableAnimation={false}
          style={{ marginBottom: "10px", zIndex: 0 }}
        />
      ))}
    </div>
  );
};
