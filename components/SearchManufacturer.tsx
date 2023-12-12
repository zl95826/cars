import { Combobox, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { manufacturers } from "@/constants";

const SearchManufacturer = () => {
  const [selected, setSelected] = useState("");
  const [query, setQuery] = useState("");
  const filteredManu =
    query === ""
      ? []
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div>
      <Combobox value={selected} onChange={setSelected}>
        {/*value prop is the selected value, onChange: the function to call when a new option is selected. */}
        <Combobox.Input
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
          <Combobox.Options>
            {filteredManu.map((manu) => (
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
            ))}
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
