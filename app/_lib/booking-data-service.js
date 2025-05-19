import { API_BASE_URL } from "@/config";

export async function getBooking(bookingId) {
  const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}`);
  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message);
  }
  const data = await response.json();
  return data;
}
