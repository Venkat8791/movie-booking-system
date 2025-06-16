import { API_BASE_URL } from "../../config";
import {
  BookingDetailsDTO,
  BookingRequest,
  BookingResponseDTO,
} from "../types/booking";

export async function getBooking(bookingId: number) {
  const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}`);
  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message);
  }
  const data: BookingDetailsDTO = await response.json();
  return data;
}

export async function getAllBookings() {
  const response: Response = await fetch(`${API_BASE_URL}/bookings/my`, {
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
  const data: BookingDetailsDTO[] = await response.json();
  return data;
}

export async function bookShow(bookingRequest: BookingRequest) {
  const response = await fetch(`${API_BASE_URL}/bookings`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
    },
    body: JSON.stringify(bookingRequest),
  });
  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message);
  }
  const data: BookingResponseDTO = await response.json();
  return data;
}
