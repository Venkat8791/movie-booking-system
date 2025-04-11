"use client";
import { useRouter } from "next/navigation";
import React from "react";

function ShowTime({ show }) {
  const router = useRouter();

  const handleShowTimeClick = (showTimeId) => {
    router.push(`/book/${showTimeId}`);
  };

  const daytime = parseInt(show.showTimeName.split(":")[0]);
  return (
    <button
      className="px-4 py-2 sm:px-8 sm:py-4 text-sm font-medium shadow-md transition-colors duration-200 
                   bg-[var(--accent-light)] text-white hover:bg-[var(--accent-dark)]
                   dark:bg-[var(--accent-light)] dark:text-black dark:hover:bg-[var(--accent)]"
      onClick={() => handleShowTimeClick(show.showTimeId)}
    >
      {show.showTimeName} {daytime < 12 ? "AM" : "PM"}
    </button>
  );
}

export default ShowTime;
