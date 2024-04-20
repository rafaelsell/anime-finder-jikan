import { Stack, Image, Text } from "@chakra-ui/react";
import { Daum } from "../api/types/TAnimeSearch";
import { Link } from "react-router-dom";

type AnimeCardProps = {
  anime: Daum;
};

export const AnimeCard = ({ anime }: AnimeCardProps) => {
  return (
    <Stack
      gap={2}
      as={Link}
      to={`/anime/${anime.mal_id}`}
      maxW={"160px"}
      borderRadius={"16px"}
    >
      <Image
        borderRadius={"16px"}
        objectFit={"cover"}
        w={"160px"}
        h={"200px"}
        src={anime.images.jpg.image_url}
        alt={anime.title}
        _hover={{
          border: "#FEDE95 2px solid",
        }}
      />

      <Text
        fontWeight={"bold"}
        _hover={{ textDecor: "underline" }}
        lineHeight={1}
        fontSize={"small"}
        noOfLines={2}
      >
        {anime.title}
      </Text>
      <Stack gap={0} direction={"row"} w={"160px"} wrap={"wrap"}>
        <Text
          lineHeight={1}
          noOfLines={1}
          color={"brand.100"}
          fontSize={"x-small"}
          as={"span"}
        >
          {anime.genres
            .map(
              (genre, index) =>
                `${genre.name}${index < anime.genres.length - 1 ? " - " : ""}`
            )
            .join("")}
        </Text>
      </Stack>
    </Stack>
  );
};
