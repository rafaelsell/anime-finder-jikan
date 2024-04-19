import { Box, Container, Heading, Image, Text, Button } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { useGetAnimeById } from "../api/hooks";

export const AnimeByIdPage = () => {
  const { id } = useParams();

  const {
    data: anime,
    isLoading,
    isError,
  } = useGetAnimeById({ id: id ? Number.parseInt(id) : 1 });

  if (isLoading) return <Box>Loading...</Box>;
  if (isError || !anime) return <Box>Error loading anime details.</Box>;
  return (
    <Container maxW="container.xl" color={"white"}>
      <Box mb="8">
        <Button colorScheme="blue" as={Link} to="/">
          Back to Home
        </Button>
      </Box>
      <Heading as="h1" size="xl" mb="8">
        {anime.data.title}
      </Heading>
      <Image
        src={anime.data.images.jpg.image_url}
        alt={anime.data.title}
        mb="8"
      />
      <Text fontSize="lg" mb="4">
        {anime.data.synopsis}
      </Text>
      <Text fontSize="md" mb="2">
        <strong>Type:</strong> {anime.data.type}
      </Text>
      <Text fontSize="md" mb="2">
        <strong>Episodes:</strong> {anime.data.episodes}
      </Text>
      <Text fontSize="md" mb="2">
        <strong>Status:</strong> {anime.data.status}
      </Text>
      <Text fontSize="md" mb="2">
        <strong>Aired:</strong> {anime.data.aired.string}
      </Text>
      <Text fontSize="md" mb="2">
        <strong>Score:</strong> {anime.data.score}
      </Text>
      <Text fontSize="md" mb="2">
        <strong>Rank:</strong> {anime.data.rank}
      </Text>
      <Text fontSize="md" mb="2">
        <strong>Popularity:</strong> {anime.data.popularity}
      </Text>
      <Text fontSize="md" mb="2">
        <strong>Members:</strong> {anime.data.members}
      </Text>
      <Text fontSize="md" mb="2">
        <strong>Favorites:</strong> {anime.data.favorites}
      </Text>
      <Text fontSize="md" mb="2">
        <strong>Genres:</strong>{" "}
        {anime.data.genres.map((genre) => genre.name).join(", ")}
      </Text>
      <Text fontSize="md" mb="2">
        <strong>Studios:</strong>{" "}
        {anime.data.studios.map((studio) => studio.name).join(", ")}
      </Text>
    </Container>
  );
};
