"use client";
import React, { useState } from "react";
import DatesList from "./DatesList";

function ShowTimesSection() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <DatesList selectedDate={selectedDate} onDateChange={setSelectedDate} />
    </div>
  );
}

export default ShowTimesSection;
