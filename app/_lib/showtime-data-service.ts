import { API_BASE_URL } from "../../config";
import { GetShowTimeSeatLayoutDTO } from "../types/seat";
import { GetShowTimesDTO } from "../types/show";

export async function getSeatsBookedForShowTime(id: number) {
  const response = await fetch(`${API_BASE_URL}/showtimes/${id}/bookedSeats`);
  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message);
  }
  const seats: GetShowTimeSeatLayoutDTO = await response.json();
  return seats;
}

export async function getOtherShowTimes(
  movieId: number,
  cinemaId: number,
  showDate: string
) {
  const response = await fetch(
    `${API_BASE_URL}/showtimes?showDate=${showDate}&cinemaId=${cinemaId}&movieId=${movieId}`
  );
  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message);
  }
  const showTimes: GetShowTimesDTO = await response.json();
  return showTimes;
}
