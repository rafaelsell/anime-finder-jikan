import React from "react";
import { Stack } from "@chakra-ui/react";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Stack bgColor={'brand.200'} w={"100%"} minH={"100vh"} align={"center"}>
      <Stack w={"100%"} h={'100%'} maxW={"1200px"} minH={'100vh'}>
        {children}
      </Stack>
    </Stack>
  );
};
