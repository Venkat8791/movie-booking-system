import { API_BASE_URL } from "../../config";
import { SeatLayoutDTO } from "../types/seatlayout";

export async function getSeatLayout(screenId: number) {
  const response = await fetch(`${API_BASE_URL}/layouts/${screenId}`);
  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message);
  }
  const data: SeatLayoutDTO = await response.json();
  return data;
}
