import { useQuery } from "@tanstack/react-query";

const fetchGameById = async (id) => {
  const response = await fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/game?" +
      new URLSearchParams({
        id: id,
      }),
    {
      headers: {
        "X-RapidAPI-Key": "7f0ad93356msh312c28bb8bda419p1179adjsn8d73a7611647",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  return response.json();
};

export const useFetchGameById = (id) =>
  useQuery(["game", id], () => fetchGameById(id));
