"use client";

import { useEffect, useState } from "react";
import {
  getCurrentUser,
  updateUserProfile,
} from "../../_lib/user-data-service";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import FormInput from "../UI/FormInput";

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
        console.error("failed to fetch current user", err);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (!profileData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">My Profile</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <FormInput
            id="firstName"
            name="firstName"
            label="First Name"
            value={
              profileData.firstName != null ? profileData.firstName : "---"
            }
            defaultValue={profileData.firstName}
            onChange={handleInputChange}
          />

          <FormInput
            id="lastName"
            name="lastName"
            label="Last Name"
            value={profileData.lastName != null ? profileData.lastName : "---"}
            defaultValue={profileData.lastName}
            onChange={handleInputChange}
          />

          <FormInput
            id="email"
            name="email"
            label="Email Id"
            disabled={true}
            value={profileData.email != null ? profileData.email : "---"}
            defaultValue={profileData.email}
            onChange={handleInputChange}
          />

          <FormInput
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            value={
              profileData.phoneNumber != null ? profileData.phoneNumber : "---"
            }
            defaultValue={profileData.phoneNumber}
            onChange={handleInputChange}
          />

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
