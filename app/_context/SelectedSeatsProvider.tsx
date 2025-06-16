"use client";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
import { SeatDetails } from "../types/seat";

type SelectedSeatsContextType = {
  selectedSeats: SeatDetails[];
  setSelectedSeats: React.Dispatch<React.SetStateAction<SeatDetails[]>>;
};

const SelectedSeatsContext = createContext<
  SelectedSeatsContextType | undefined
>(undefined);

const SelectedSeatsProvider = ({ children }: PropsWithChildren<{}>) => {
  const [selectedSeats, setSelectedSeats] = useState<SeatDetails[]>([]);
  const selectedSeatsContextValue = useMemo(
    () => ({ selectedSeats, setSelectedSeats }),
    [selectedSeats, setSelectedSeats]
  );

  return (
    <SelectedSeatsContext.Provider value={selectedSeatsContextValue}>
      {children}
    </SelectedSeatsContext.Provider>
  );
};

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
