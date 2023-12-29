import { Combobox, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { manufacturers } from "@/constants";
import Image from "next/image";
import { SearchManufacturerProps } from "@/types";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");
  const filteredManu =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <>
      <div className="search-manufacturer">
        <Combobox value={manufacturer} onChange={setManufacturer}>
          {/*value prop is the selected value, onChange: the function to call when a new option is selected. */}
          <div className="relative w-full">
            <Combobox.Input
              className="search-manufacturer__input"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Volkswagen..."
              displayValue={(item: string) => item}
            />
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options
                className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                static
              >
                {filteredManu.length === 0 && query !== "" ? (
                  <Combobox.Option
                    value={query}
                    className="search-manufacturer__option"
                  >
                    create {`"${query}"`}
                  </Combobox.Option>
                ) : (
                  filteredManu.map((manu) => (
                    <Combobox.Option
                      key={manu}
                      value={manu}
                      className={({ active }) =>
                        `relative search-manufacturer__option ${
                          active
                            ? "bg-primary-blue text-white"
                            : "text-gray-900"
                        }`
                      }
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {manu}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active
                                  ? "text-white"
                                  : "text-pribg-primary-purple"
                              }`}
                            ></span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
                {/* {filteredManu.map((manu) => (
                  <Combobox.Option
                    key={manu}
                    value={manu}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-teal-600 text-white" : "text-gray-900"
                      }`
                    }
                  >
                    {manu}
                  </Combobox.Option>
                ))} */}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
    </>
  );
};

export default SearchManufacturer;
