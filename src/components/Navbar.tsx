import { Stack } from "@chakra-ui/react";
import { AnimeSearch, Logo } from ".";

export const Navbar = () => {
  return (
    <Stack py={4} direction={'row'} justify={'space-between'} w={'100%'} align={'center'}>
      <Logo />
      <AnimeSearch/>
    </Stack>
  );
};
