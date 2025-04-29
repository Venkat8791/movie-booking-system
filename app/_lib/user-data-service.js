// import { revalidatePath } from "next/cache";

export async function getUserData(id) {
  const user = await fetch("http://localhost:8080/mxmovies/v1/users/" + id);
  const data = await user.json();

  if (!data) {
    throw new Error("Failed to fetch data");
  }

  return data;
}

export const getCurrentUser = async () => {
  console.log("inside get current user");
  const res = await fetch(
    "http://localhost:8080/mxmovies/v1/api/current-user",
    {
      credentials: "include",
    }
  );

  if (!res.ok) throw new Error("User not authenticated");

  return await res.json();
};

export async function updateUserProfile(user) {
  console.log(user);
  const res = await fetch(
    "http://localhost:8080/mxmovies/v1/users/update-profile",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );
  console.log(res);
  if (!res.ok) {
    throw new Error("Failed to update profile");
  }

  const data = await res.json();
  console.log(data);
  //   revalidatePath("/profile");
}
