"use client";
import React from "react";

const formatDate = (date) => {
  const day = date.getDate();
  let week = date.toLocaleString("default", { weekday: "short" });
  if (date.getDate() == new Date().getDate()) {
    week = "Today";
  } else if (date.getDate() == new Date().getDate() + 1) {
    week = "Tomorrow";
  }
  return `${day} ${week}`;
};

function DatesList({ dates, selectedDate, onDateChange }) {
  return (
    <div className="flex flex-grow flex-wrap gap-1 sm:gap-6 items-center p-4 ">
      {dates.map((date, idx) => (
        <button
          key={idx}
          className={`w-30 p-2 flex flex-col items-center justify-center rounded-sm ${
            selectedDate === date.toISOString().split("T")[0]
              ? "bg-[var(--accent)] text-white"
              : " text-black bg-[var(--accent-light)] hover:bg-[var(--accent-hover)]"
          }`}
          onClick={() => onDateChange(date)}
        >
          <span className="font-semibold">
            {formatDate(date).split(" ")[0]}
          </span>
          <span className="text-sm">{formatDate(date).split(" ")[1]}</span>
        </button>
      ))}
    </div>
  );
}

export default DatesList;
