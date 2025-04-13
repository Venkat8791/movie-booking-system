export async function getBooking(bookingId) {
  const response = await fetch(
    "http://localhost:8080/mxmovies/v1/bookings/" + bookingId
  );
  const data = await response.json();
  if (!data) {
    throw new Error("Failed to fetch booking");
  }
  console.log(data);
  return data;
}
