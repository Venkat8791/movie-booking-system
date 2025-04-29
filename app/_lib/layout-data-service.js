export async function getSeatLayout(screenId) {
  const response = await fetch(
    "http://localhost:8080/mxmovies/v1/layouts/" + screenId
  );
  if (!response.ok) {
    console.log("Error fetching seat layout:", response.status);
    const errorResponse = await response.json();
    throw new Error(errorResponse.message);
  }
  const data = await response.json();
  return data;
}
