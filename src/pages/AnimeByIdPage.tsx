import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useGetAnimeById } from "../api/hooks";
import {
  AnimeInfoContainer,
  AnimeInfoStatsTag,
  AnimeInfoStats,
  AnimeInfoStatsContainer,
  AnimeInfoTitle,
  Navbar,
} from "../components";

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
    <Stack>
      <Navbar/>
    <Stack direction={"row"} color={"white"} gap={8}>
      <Stack direction={"column"} maxW={"250px"}>
        <Image
          src={anime.data.images.jpg.image_url}
          alt={anime.data.title}
          borderRadius={"16px"}
          objectFit={"cover"}
          w={"250px"}
          h={"350px"}
          _hover={{
            border: "#FEDE95 2px solid",
          }}
        />
        <Stack maxW={"250px"}>
          <AnimeInfoContainer>
            <AnimeInfoTitle title="Alternative Titles" />
            <AnimeInfoStatsContainer>
              <AnimeInfoStats
                title="Synonyms"
                content={anime.data.title_synonyms.join(", ")}
              />
              <AnimeInfoStats
                title="Japanese"
                content={anime.data.title_japanese}
              />
            </AnimeInfoStatsContainer>
          </AnimeInfoContainer>
          <AnimeInfoContainer>
            <AnimeInfoTitle title="Informations" />
            <AnimeInfoStatsContainer>
              <AnimeInfoStats title="Type" content={anime.data.type} />
              <AnimeInfoStats
                title="Episodes"
                content={anime.data.episodes.toString()}
              />
              <AnimeInfoStats title="Status" content={anime.data.status} />
              <AnimeInfoStats title="Aired" content={anime.data.aired.string} />
              <AnimeInfoStats
                title="Premiered"
                content={
                  anime.data.aired.from && anime.data.aired.to
                    ? `${new Date(anime.data.aired.from)} to ${new Date(
                        anime.data.aired.to
                      )}`
                    : "N/A"
                }
              />
              <AnimeInfoStats
                title="Broadcast"
                content={
                  anime.data.broadcast.string
                    ? anime.data.broadcast.string
                    : "N/A"
                }
              />
              <AnimeInfoStats
                title="Producers"
                content={anime.data.producers
                  .map((producer) => producer.name)
                  .join(", ")}
              />
              <AnimeInfoStats
                title="Licensors"
                content={anime.data.licensors
                  .map((licensor) => licensor.name)
                  .join(", ")}
              />
              <AnimeInfoStats
                title="Studios"
                content={anime.data.studios
                  .map((studio) => studio.name)
                  .join(", ")}
              />
              <AnimeInfoStats title="Source" content={anime.data.source} />
              <AnimeInfoStats
                title="Genres"
                content={anime.data.genres
                  .map((genre) => genre.name)
                  .join(", ")}
              />
              <AnimeInfoStats
                title="Demographics"
                content={anime.data.demographics
                  .map((demographic) => demographic.name)
                  .join(", ")}
              />
              <AnimeInfoStats title="Duration" content={anime.data.duration} />
              <AnimeInfoStats title="Rating" content={anime.data.rating} />
            </AnimeInfoStatsContainer>
          </AnimeInfoContainer>
          <AnimeInfoContainer>
            <AnimeInfoTitle title="Statistics" />
            <AnimeInfoStatsContainer>
              <AnimeInfoStats
                title="Score"
                content={anime.data.score.toString()}
              />
              <AnimeInfoStats
                title="Ranked"
                content={anime.data.rank.toString()}
              />
              <AnimeInfoStats
                title="Popularity"
                content={anime.data.popularity.toString()}
              />
              <AnimeInfoStats
                title="Members"
                content={anime.data.members.toString()}
              />
              <AnimeInfoStats
                title="Favorites"
                content={anime.data.favorites.toString()}
              />
            </AnimeInfoStatsContainer>
          </AnimeInfoContainer>
        </Stack>
      </Stack>
      <Stack maxW={'750px'} gap={8}>
        <Stack>
        <Heading as={"h1"}>{anime.data.title}</Heading>
        <Heading
          color={"brand.100"}
          fontSize={"xl"}
          fontWeight={"light"}
          as={"h2"}
        >
          {anime.data.title}
        </Heading>
        </Stack>
        <Stack direction={"row"} gap={2} wrap={"wrap"} textTransform={"uppercase"} justify={'center'} align={'center'}>
          <AnimeInfoStatsTag
            title="Score"
            content={`#${anime.data.score.toString()}`}
          />
          <AnimeInfoStatsTag
            title="Ranked"
            content={`#${anime.data.rank.toString()}`}
          />
          <AnimeInfoStatsTag
            title="Popularity"
            content={`#${anime.data.popularity.toString()}`}
          />
          <AnimeInfoStatsTag
            title="Members"
            content={`#${anime.data.members.toString()}`}
          />
          <AnimeInfoStatsTag title="Season" content={anime.data.season} />
          <AnimeInfoStatsTag title="Type" content={anime.data.type} />
          <AnimeInfoStatsTag
            title="Studio"
            content={anime.data.studios.map((studio) => studio.name).join(", ")}
          />
        </Stack>
        <Stack>
          <Text fontWeight={"bold"}>Synopsis</Text>
          <Text textAlign={'justify'} fontSize={"small"}>{anime.data.synopsis}</Text>
        </Stack>
        {anime.data.background ? (
          <Stack>
            <Text fontWeight={"bold"}>Background</Text>
            <Text fontSize={"small"}>{anime.data.background}</Text>
          </Stack>
        ) : null}
      </Stack>
    </Stack>
    </Stack>
  );
};
