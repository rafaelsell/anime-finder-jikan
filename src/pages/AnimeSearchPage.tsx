import { Stack, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useGetAnimeBySearch } from "../api/hooks";
import { AnimeCard, Navbar } from "../components";

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
    <Stack px={4} py={6} justify={'center'} minH={'100%'} gap={6} color={"white"} w={'100%'} direction={'column'}>
      <Navbar/>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>An error occurred: {error.message}</Text>}
      <Stack w={'100%'} align={'center'} justify={'center'} wrap={'wrap'} direction={'row'} gap={6}>
      {animes?.data.map((anime) => (
        <AnimeCard key={anime.title} anime={anime} />
      ))}
      </Stack>
    </Stack>
  );
};
