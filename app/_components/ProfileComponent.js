"use client";

import { useEffect, useState } from "react";
import { updateUserProfile } from "../_lib/user-data-service";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function ProfileComponent() {
  const [profileData, setProfileData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      const userId = localStorage.getItem("userId");

      if (!userId) return;

      const res = await fetch(
        "http://localhost:8080/mxmovies/v1/users/" + userId
      );

      const data = await res.json();
      setProfileData(data);
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    try {
      await updateUserProfile({
        userId: userId,
        username: profileData.username,
        emailId: profileData.emailId,
        phoneNumber: profileData.phoneNumber,
      });
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile.");
    }
    router.refresh();
  };

  if (!profileData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">My Profile</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-1">Username</label>
            <input
              type="text"
              defaultValue={
                profileData.username === null ? "---" : profileData.username
              }
              className="w-full px-4 py-2 border rounded-md bg-gray-100"
              onChange={(e) =>
                setProfileData({ ...profileData, username: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email ID</label>
            <input
              type="text"
              defaultValue={
                profileData.emailId === null ? "---" : profileData.emailId
              }
              className="w-full px-4 py-2 border rounded-md bg-gray-100"
              onChange={(e) =>
                setProfileData({ ...profileData, emailId: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              defaultValue={profileData.phoneNumber}
              disabled
              className="w-full px-4 py-2 border rounded-md bg-gray-100"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-md"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfileComponent;
