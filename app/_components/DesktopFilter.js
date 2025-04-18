import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";

import React from "react";

function DesktopFilter({
  handleSelect,
  isDesktopFilterOpen,
  selected,
  setIsDesktopFilterOpen,
  options,
  label,
}) {
  if (selected === null) {
    selected = "All";
  }
  return (
    <Popover className="relative">
      <PopoverButton
        className="px-4 py-2 bg-gray-100 flex rounded-full text-sm shadow-md hover:bg-gray-200 transition"
        onClick={() => setIsDesktopFilterOpen(true)}
      >
        {`${label + ":" + selected}` || label}
        <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
      </PopoverButton>

      {isDesktopFilterOpen && (
        <PopoverPanel className="absolute z-10 mt-2 w-32 p-2 bg-white rounded-xl shadow-lg border">
          <div className="flex flex-col gap-2">
            {options.map((option) => (
              <button
                key={option}
                className={`text-left transition rounded-md  ${
                  selected === option
                    ? "bg-amber-500 text-white"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
                onClick={() => handleSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </PopoverPanel>
      )}
    </Popover>
  );
}

export default DesktopFilter;
