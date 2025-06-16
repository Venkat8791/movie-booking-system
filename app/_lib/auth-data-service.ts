//Not using this for now

import { API_BASE_URL } from "../../config";

export async function sendOtp(phoneNumber: string) {
  const response = await fetch(
    `${API_BASE_URL}/api/otp/send?phoneNumber=${phoneNumber}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to send otp");
  }

  console.log(response);

  return true;
}

export async function verifyOtp(phoneNumber: string, otp: string) {
  const response = await fetch(
    `${API_BASE_URL}/api/otp/verify?phoneNumber=${phoneNumber}&otpCode=${otp}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  console.log(data);

  if (!data) {
    throw new Error("Failed to verify otp");
  }

  return data;
}
