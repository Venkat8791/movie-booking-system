import { API_BASE_URL } from "@/config";

export async function getSeatsBookedForShowTime(id) {
  const response = await fetch(`${API_BASE_URL}/showtimes/${id}/bookedSeats`);
  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message);
  }
  const seats = await response.json();
  return seats;
}

export async function getOtherShowTimes(movieId, cinemaId, showDate) {
  const response = await fetch(
    `${API_BASE_URL}/showtimes?showDate=${showDate}&cinemaId=${cinemaId}&movieId=${movieId}`
  );
  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message);
  }
  const showTimes = await response.json();
  return showTimes;
}
