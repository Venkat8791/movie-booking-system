"use client";
import React, { useMemo } from "react";
import DatesList from "./DatesList";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import ShowCinemasSection from "./ShowCinemasSection";

const today = new Date();

const getNext5days = Array.from({ length: 5 }, (_, i) => {
  const date = new Date();
  date.setDate(today.getDate() + i);
  return date;
});

function ShowTimesSection({ date, showTimes }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedDate =
    searchParams.get("date") || new Date().toISOString().split("T")[0];

  const onDateChange = (date) => {
    const formatted = date.toISOString().split("T")[0];
    const current = new URLSearchParams(searchParams.toString());
    console.log("current", current);
    current.set("date", formatted);
    router.push(`?${current.toString()}`);
  };

  const dates = useMemo(() => getNext5days, []);
  return (
    <div>
      <DatesList
        dates={dates}
        selectedDate={selectedDate}
        onDateChange={onDateChange}
      />
      {showTimes?.length == 0 ? (
        <p>oops 🙁 , No Shows Available.</p>
      ) : (
        <ShowCinemasSection cinemas={showTimes} />
      )}
    </div>
  );
}

export default ShowTimesSection;
