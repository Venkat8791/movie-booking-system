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

export async function getAllBookings() {
  const response = await fetch(`${API_BASE_URL}/bookings/my`, {
    credentials: "include",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
    },
  });
  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message);
  }
  const data = await response.json();
  console.log(data);
  return data;
}
