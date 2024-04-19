import { Text, Button, Stack } from "@chakra-ui/react";

export const HomePage = () => {
  return (
    <Stack w={"100%"} h={"100%"}>
      <Text fontSize="xl" fontWeight="bold" color={"white"}>
        Welcome to Anime Finder
      </Text>
      <Button colorScheme="blue" w={"min-content"}>
        Discover More
      </Button>
    </Stack>
  );
};
