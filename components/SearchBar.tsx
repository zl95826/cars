"use client";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
const SearchButton = ({ otherClasses }: { otherClasses?: string }) => (
  //-ml-3, which use a negative margin left value
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    Search
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  console.log(manufacturer);
  return (
    <form className="searchbar" onSubmit={() => {}}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="max-sm:hidden" />
      </div>
    </form>
  );
};

export default SearchBar;
