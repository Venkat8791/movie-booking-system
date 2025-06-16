import { Movie } from "./movie";
import { ShowDetailsDTO } from "./show";

export type BookingRequest = {
  showTimeId: number;
  seatIds: string[];
  totalPrice: number;
};

export type BookingResponseDTO = {
  bookingId: number;
  userId: number;
  showTimeId: number;
  numOfSeats: number;
  totalPrice: number;
  bookingDate: string;
};

export type BookingDetailsDTO = {
  bookingId: number;
  movie: Movie;
  language: string;
  showDetails: ShowDetailsDTO;
  seatNumbers: string[];
  totalPrice: number;
};
