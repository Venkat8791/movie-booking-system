export async function getSeatLayout(screenId) {
  const response = await fetch(
    "http://localhost:8080/mxmovies/v1/layouts/" + screenId
  );
  const data = await response.json();
  if (!data) {
    throw new Error("Failed to fetch booking");
  }

  return data;
}
