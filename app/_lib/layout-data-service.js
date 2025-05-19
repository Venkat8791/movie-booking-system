import { API_BASE_URL } from "@/config";

export async function getSeatLayout(screenId) {
  const response = await fetch(`${API_BASE_URL}/layouts/${screenId}`);
  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message);
  }
  const data = await response.json();
  return data;
}
