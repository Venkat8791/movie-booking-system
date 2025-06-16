"use client";
import React from "react";
import FilterDropDown from "./Filters/FilterDropDown";

type DatesListProps = {
  dates: Date[];
  selectedDate: Date | string;
  onDateChange: (date: Date) => void;
  error: string | null;
};

const formatDate = (date: Date) => {
  const day = date.getDate();
  let week = date.toLocaleString("default", { weekday: "short" });
  const month = date.toLocaleString("default", { month: "short" });
  return `${day} ${week} ${month}`;
};

const DatesList: React.FC<DatesListProps> = ({
  dates,
  selectedDate,
  onDateChange,
  error,
}) => {
  return (
    <div className="flex flex-col gap-2 md:flex-row justify-between p-2 border-t-1 border-gray-400 mt-4 shadow-md">
      <div className="flex flex-grow flex-wrap gap-1 md:gap-2 items-center">
        {dates.map((date) => (
          <button
            key={date.toDateString()}
            className={`w-15 p-2 flex flex-col items-center justify-center rounded-sm ${
              selectedDate === date.toISOString().split("T")[0]
                ? "bg-[var(--accent)] text-white"
                : " text-black bg-[var(--accent-light)] hover:bg-[var(--accent-hover)]"
            }`}
            onClick={() => onDateChange(date)}
          >
            <span className="text-sm">{formatDate(date).split(" ")[1]}</span>
            <span className="font-semibold">
              {formatDate(date).split(" ")[0]}
            </span>

            <span className="text-sm">{formatDate(date).split(" ")[2]}</span>
          </button>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-2 items-center">
        {!error && (
          <FilterDropDown
            options={["All", "English", "Telugu", "Hindi"]}
            label={"Language"}
          />
        )}
      </div>
    </div>
  );
};

export default DatesList;
