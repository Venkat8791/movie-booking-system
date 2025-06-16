"use client";
import React, { useMemo } from "react";
import DatesList from "./DatesList";
import { useRouter, useSearchParams } from "next/navigation";
import ShowCinemasSection from "./ShowCinemasSection";
import { GetShowTimeDTO } from "../types/show";

type ShowTimesSectionProps = {
  date: Date | string;
  showTimes: GetShowTimeDTO[] | null;
  movieId: number;
  languageFilter: string;
  error: string | null;
};

const today = new Date();

const getNext5days = Array.from({ length: 5 }, (_, i) => {
  const date = new Date();
  date.setDate(today.getDate() + i);
  return date;
});

function filterByLanguage(
  data: GetShowTimeDTO[] | null,
  selectedLanguage: string
) {
  if (data == null) {
    return null;
  }
  return data
    .map((showTime: GetShowTimeDTO) => {
      const filteredShows = showTime.shows.filter(
        (show) => show.language.toLowerCase() === selectedLanguage.toLowerCase()
      );
      return filteredShows.length > 0
        ? { ...showTime, shows: filteredShows }
        : null;
    })
    .filter((showTime) => showTime !== null);
}

const ShowTimesSection: React.FC<ShowTimesSectionProps> = ({
  date,
  showTimes,
  movieId,
  languageFilter,
  error,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedDate =
    searchParams.get("date") ?? new Date().toISOString().split("T")[0];
  if (languageFilter.toLowerCase() !== "All".toLowerCase()) {
    showTimes = filterByLanguage(showTimes, languageFilter);
  }

  const onDateChange = (date: Date) => {
    const formatted = date.toISOString().split("T")[0];
    const params = new URLSearchParams(searchParams.toString());
    params.set("date", formatted);
    params.delete("language");
    router.replace(`?${params.toString()}`);
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
};

export default ShowTimesSection;
