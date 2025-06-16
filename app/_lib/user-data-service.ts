import { API_BASE_URL } from "../../config";
import { User } from "../types/user";

export async function getCurrentUser() {
  const response = await fetch(`${API_BASE_URL}/api/current-user`, {
    credentials: "include",
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message);
  }
  const currentUser = await response.json();
  return currentUser;
}

export async function updateUserProfile(user: User) {
  const response = await fetch(`${API_BASE_URL}/api/update-user `, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error("Failed to update profile");
  }
  const data = await response.json();
  return data;
}
