"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import DesktopFilter from "./DesktopFilter";
import MobileFilter from "./MobileFilter";

const FilterDropDown = ({ options, label }) => {
  const searchParams = useSearchParams();
  const [isDesktopFilterOpen, setIsDesktopFilterOpen] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const router = useRouter();

  const handleSelect = (option) => {
    setSelected(option);
    const params = new URLSearchParams(searchParams?.toString() || "");

    params.set(label.toLowerCase(), option.toString());
    router.replace(`?${params.toString()}`, undefined, { shallow: true });
    setIsDesktopFilterOpen(false);
    setIsMobileFilterOpen(false); // close dropdown after selection
  };

  return (
    <>
      <div className="block md:hidden">
        <MobileFilter
          options={options}
          label={label}
          isMobileFilterOpen={isMobileFilterOpen}
          handleSelect={handleSelect}
          setIsMobileFilterOpen={setIsMobileFilterOpen}
          selected={selected}
        />
      </div>

      {/* Sidebar Filter for Desktop */}
      <div className="hidden md:block">
        <DesktopFilter
          options={options}
          label={label}
          isDesktopFilterOpen={isDesktopFilterOpen}
          handleSelect={handleSelect}
          setIsDesktopFilterOpen={setIsDesktopFilterOpen}
          selected={selected}
        />
      </div>
    </>
  );
};

export default FilterDropDown;
