import { Stack, Text } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { useGetAnimeBySearch } from "../api/hooks";

export const AnimeSearchPage = () => {
  const { q } = useParams();

  const {
    data: animes,
    isLoading,
    error,
  } = useGetAnimeBySearch({ searchQuery: q });

  console.log(animes);
  console.log(q);

  return (
    <Stack color={"white"}>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>An error occurred: {error.message}</Text>}
      {animes?.data.map((anime) => {
        return (
          <Stack key={anime.mal_id.toString()}>
            <Link to={`/anime/${anime.mal_id}`}>{anime.title}</Link>
          </Stack>
        );
      })}
    </Stack>
  );
};
