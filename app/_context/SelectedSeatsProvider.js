"use client";
import { createContext, useContext, useState } from "react";
const SelectedSeatsContext = createContext();
function SelectedSeatsProvider({ children }) {
  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <SelectedSeatsContext.Provider value={{ selectedSeats, setSelectedSeats }}>
      {children}
    </SelectedSeatsContext.Provider>
  );
}

function useSelectedSeats() {
  const context = useContext(SelectedSeatsContext);
  if (!context) {
    throw new Error(
      "useSelectedSeats must be used within a SelectedSeatsProvider"
    );
  }
  return context;
}
export { SelectedSeatsProvider, useSelectedSeats };
