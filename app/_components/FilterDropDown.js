"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const FilterDropDown = ({ options, label }) => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const router = useRouter();

  const handleSelect = (option) => {
    setSelected(option);
    const params = new URLSearchParams(searchParams?.toString() || "");

    params.set(label, option.toString());
    router.replace(`?${params.toString()}`, undefined, { shallow: true });
    setIsOpen(false); // close dropdown after selection
  };

  return (
    <div className="relative inline-block text-left  ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-white rounded-md shadow-sm hover:bg-gray-50"
      >
        {selected ? `${label}: ${selected}` : `${label}`}
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 bg-white  rounded-md shadow-lg">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropDown;
