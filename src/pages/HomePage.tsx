import { Stack } from "@chakra-ui/react";
import { AnimeSearch } from "../components";
import { LogoFull } from "../components";

export const HomePage = () => {
  return (
    <Stack w={"100%"} minH={'100vh'} justify={'center'} gap={4} align={'center'}>
      <LogoFull />
      <AnimeSearch />
    </Stack>
  );
};
