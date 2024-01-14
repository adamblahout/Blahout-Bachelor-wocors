import { useQuery } from "@tanstack/react-query";

const fetchAllGames = async () => {
  const response = await fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games",
    {
      headers: {
        "X-RapidAPI-Key": "7f0ad93356msh312c28bb8bda419p1179adjsn8d73a7611647",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    }
  );

  if (!response.ok) {
    throw new Error("details fetch not ok");
  }

  return response.json();
};

export const useFetchAllGames = () => useQuery(["allGames"], fetchAllGames);
