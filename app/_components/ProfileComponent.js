"use client";

import { useEffect, useState } from "react";
import { getCurrentUser, updateUserProfile } from "../_lib/user-data-service";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function ProfileComponent() {
  const [profileData, setProfileData] = useState();
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getCurrentUser();
        setProfileData(data);
        console.log(data);
      } catch (err) {
        console.error("failed to fetch current user");
      }
    };

    fetchUser();
  }, []);

  const handleSubmit = async (e) => {
    console.log(profileData);
    e.preventDefault();
    const data = await updateUserProfile(profileData);
    if (data.message === "User Updated Successfully") {
      toast.success("Profile updated successfully!");
    } else {
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
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">My Profile</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              defaultValue={
                profileData.username === null ? "---" : profileData.firstName
              }
              className="w-full px-4 py-2 border rounded-md bg-gray-100"
              onChange={(e) =>
                setProfileData({ ...profileData, firstName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              defaultValue={
                profileData.lastName === null ? "---" : profileData.lastName
              }
              className="w-full px-4 py-2 border rounded-md bg-gray-100"
              onChange={(e) =>
                setProfileData({ ...profileData, lastName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email ID</label>
            <input
              type="text"
              disabled
              defaultValue={
                profileData.email === null ? "---" : profileData.email
              }
              className="w-full px-4 py-2 border rounded-md bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              defaultValue={
                profileData.phoneNumber === null
                  ? "---"
                  : profileData.phoneNumber
              }
              className="w-full px-4 py-2 border rounded-md bg-gray-100"
              onChange={(e) =>
                setProfileData({ ...profileData, phoneNumber: e.target.value })
              }
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
