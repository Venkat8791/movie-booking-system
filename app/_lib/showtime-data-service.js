export async function getSeatsForShowTime(id) {
  const seats = await fetch(
    "http://localhost:8080/mxmovies/v1/showtimes/" + id + "/seats"
  );
  const data = await seats.json();
  if (!data) {
    throw new Error("Failed to fetch data");
  }
  console.log(data);
  return data;
}
