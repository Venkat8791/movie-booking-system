import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";
import React from "react";

type MobileFilterProps = {
  handleSelect: (option: string) => void;
  isMobileFilterOpen: boolean;
  selected: string;
  setIsMobileFilterOpen: (flag: boolean) => void;
  options: string[];
  label: string;
};

const MobileFilter: React.FC<MobileFilterProps> = ({
  handleSelect,
  isMobileFilterOpen,
  selected,
  setIsMobileFilterOpen,
  options,
  label,
}) => {
  return (
    <div className="md:hidden">
      <button onClick={() => setIsMobileFilterOpen(true)}>
        <div className="flex">
          {label}
          <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
        </div>
      </button>

      <Dialog
        open={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-x-0 bottom-0 z-50">
          <DialogPanel className="mx-auto w-full max-w-md rounded-t-2xl bg-white p-4 shadow-lg">
            <DialogTitle className="text-lg font-medium">
              {`Select ${label}`}
            </DialogTitle>

            <div className="mt-4 flex gap-2 ">
              {options.map((option) => (
                <button
                  key={option}
                  className="border-1 border-red-400 rounded-full p-2 mb-1"
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default MobileFilter;
