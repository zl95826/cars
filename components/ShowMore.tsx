"use client";
//useRouter only works in Client Components.
import React from "react";
import { CustomButton } from ".";
import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newPathname = updateSearchParams("limit", `${(pageNumber + 1) * 10}`);
    router.push(newPathname);
  };

  return (
    <div className="flex justify-center mt-10">
      {!isNext && (
        <CustomButton
          type="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
