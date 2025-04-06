"use client";
import React, { useMemo } from "react";

const getNext5days = () => {
  const dates = [];
  const today = new Date();

  for (let i = 0; i < 5; i++) {
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + i);
    dates.push(nextDate);
  }
  return dates;
};

const formatDate = (date) => {
  const day = date.getDate();
  let week = date.toLocaleString("default", { weekday: "long" });
  if (date.getDate() == new Date().getDate()) {
    week = "Today";
  } else if (date.getDate() == new Date().getDate() + 1) {
    week = "Tomorrow";
  }
  console.log(`${day} ${week}`);
  return `${day} ${week}`;
};

function DatesList({ selectedDate, onDateChange }) {
  const dates = useMemo(() => getNext5days(), []);
  return (
    <div className="flex gap-6 flex-grow items-center  p-4">
      {dates.map((date, idx) => (
        <button
          key={idx}
          className={`w-30 p-2 flex flex-col items-center justify-center border ${
            selectedDate.toDateString() === date.toDateString()
              ? "bg-[var(--accent)] text-white"
              : " text-black bg-[var(--accent-light)] hover:bg-[var(--accent-hover)]"
          }`}
          onClick={() => onDateChange(date)}
        >
          <span className="font-bold">{formatDate(date).split(" ")[0]}</span>
          <span className="font-bold">{formatDate(date).split(" ")[1]}</span>
        </button>
      ))}
    </div>
  );
}

export default DatesList;
