// import { revalidatePath } from "next/cache";

import { API_BASE_URL } from "@/config";

export async function getUserData(id) {
  const response = await fetch(`${API_BASE_URL}/users/${id}`);
  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message);
  }
  const user = await user.json();
  return user;
}

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

export async function updateUserProfile(user) {
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
