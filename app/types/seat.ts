export type SeatType = "VIP" | "REGULAR" | "PREMIUM";
export type SeatDTO = {
  seatId: string;
  rowNumber: string;
  columnNumber: number;
  seatType: SeatType;
  status: "AVAILABLE" | "BOOKED" | "BLOCKED";
  price: number;
};

export type BookedSeatsDTO = {
  showTimeId: number;
  showTimeName: string;
  screenName: string;
  cinemaName: string;
  movieName: string;
  showDate: string;
  seats: SeatDTO[];
};

export type GetShowTimeSeatLayoutDTO = {
  showTimeId: number;
  showTimeName: string;
  screenName: string;
  cinemaName: string;
  movieName: string;
  showDate: string;
  seats: SeatDTO[];
};

export type SeatDetails = {
  seatId: string;
  label: string;
  gap: boolean;
  seatType: SeatType;
  price: number;
};
