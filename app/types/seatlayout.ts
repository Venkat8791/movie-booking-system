import { SeatType } from "./seat";

export type SeatLayoutDTO = {
  id: string;
  screenId: number;
  cinemaId: number;
  sections: SeatSection[];
};

export type SeatSection = {
  sectionName: SeatType;
  price: number;
  rows: SeatRow[];
};
export type SeatRow = {
  label: string;
  seats: SeatD[];
};

export type SeatD = {
  seatId: string;
  label: string;
  gap: boolean;
};
