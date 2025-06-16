export type ShowTimeDTO = {
  showTimeId: number;
  screenId: number;
  screenName: string;
  showTimeName: string;
  language: string;
  numOfSeats: number;
  availableSeats: number;
};

export type GetShowTimeDTO = {
  cinemaId: number;
  cinemaName: string;
  shows: ShowTimeDTO[];
};

export type ShowDetailsDTO = {
  showTimeName: string;
  screenName: string;
  cinemaName: string;
  location: string;
};

export type GetShowTimesDTO = {
  cinemaId: number;
  movieId: number;
  showDate: Date;
  shows: GetShowDTO[];
};

export type GetShowDTO = {
  showTimeId: number;
  screenId: number;
  screenName: string;
  showTimeName: string;
  language: string;
  numOfSeats: number;
  availableSeats: number;
};
