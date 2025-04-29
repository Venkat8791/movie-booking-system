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

function filterByLanguage(data, selectedLanguage) {
  return data
    .map((showTime) => {
      const filteredShows = showTime.shows.filter(
        (show) => show.language.toLowerCase() === selectedLanguage.toLowerCase()
      );
      return filteredShows.length > 0
        ? { ...showTime, shows: filteredShows }
        : null;
    })
    .filter((showTime) => showTime !== null);
}

function ShowTimesSection({ date, showTimes, movieId, languageFilter, error }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedDate =
    searchParams.get("date") || new Date().toISOString().split("T")[0];
  if (languageFilter.toLowerCase() !== "All".toLowerCase()) {
    showTimes = filterByLanguage(showTimes, languageFilter);
  }

  const onDateChange = (date) => {
    const formatted = date.toISOString().split("T")[0];
    const params = new URLSearchParams(searchParams.toString());
    params.set("date", formatted);
    params.delete("language");
    router.replace(`?${params.toString()}`, undefined, { shallow: true });
  };

  const dates = useMemo(() => getNext5days, []);

  return (
    <div>
      <DatesList
        error={error}
        dates={dates}
        selectedDate={selectedDate}
        onDateChange={onDateChange}
      />
      {error ? (
        <div className="flex flex-col items-center justify-center h-full p-4 bg-red-400">
          <p className="font-semibold ">OOPS 🙁 , No Shows Available.</p>
        </div>
      ) : (
        <ShowCinemasSection
          cinemas={showTimes}
          showDate={date}
          movieId={movieId}
        />
      )}
    </div>
  );
}

export default ShowTimesSection;
