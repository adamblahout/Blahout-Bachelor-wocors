import { useQuery } from "@tanstack/react-query";

const fetchGamesByGenre = async (genre) => {
  const response = await fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games?" +
      new URLSearchParams({
        category: genre,
      }),
    {
      headers: {
        "X-RapidAPI-Key": "7f0ad93356msh312c28bb8bda419p1179adjsn8d73a7611647",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`details/${genre} fetch not ok`);
  }

  return response.json();
};

export const useFetchGamesByGenre = (genre) =>
  useQuery(["category", genre], () => fetchGamesByGenre(genre), {
    enabled: !!genre,
  });
