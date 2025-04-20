export async function getSeatsBookedForShowTime(id) {
  const seats = await fetch(
    "http://localhost:8080/mxmovies/v1/showtimes/" + id + "/bookedSeats"
  );
  const data = await seats.json();

  if (!data) {
    throw new Error("Failed to fetch data");
  }

  return data;
}

export async function getOtherShowTimes(movieId, cinemaId, showDate) {
  const shows = await fetch(
    "http://localhost:8080/mxmovies/v1/showtimes?showDate=" +
      showDate +
      "&cinemaId=" +
      cinemaId +
      "&movieId=" +
      movieId
  );

  const data = await shows.json();
  if (!data) {
    throw new Error("Failed to fetch data");
  }
  return data;
}
