import { API_BASE_URL } from "@/config";
//Not using this for now

export async function sendOtp(phoneNumber) {
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

export async function verifyOtp(phoneNumber, otp) {
  const response = await fetch(
    `${API_BASE_URL}/api/otp/verify?phoneNumber=${phoneNumber}&otpCode=${otp}`,
    phoneNumber + "&otpCode=" + otp,
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
