import { Stack, Text } from "@chakra-ui/react";

type AnimeInfoContainerProps = {
  children: React.ReactNode;
};
type AnimeInfoTitleProps = {
  title: string;
};

type AnimeInfoStatsContainerProps = {
  children: React.ReactNode;
};
type AnimeInfoStatsProps = {
  title: string;
  content: string;
};

type AnimeInfoStatsTagProps = {
  title: string;
  content: string;
};

export const AnimeInfoContainer = ({ children }: AnimeInfoContainerProps) => {
  return (
    <Stack
      w={"100%"}
      minH={"100px"}
      border={"white 1px solid"}
      px={2}
      py={2}
      borderRadius={"16px"}
    >
      {children}
    </Stack>
  );
};

export const AnimeInfoTitle = ({ title }: AnimeInfoTitleProps) => {
  return (
    <Stack
      bgColor={"brand.100"}
      borderRadius={"full"}
      py={2}
      px={4}
      w={"100%"}
      justify={"center"}
      align={"center"}
    >
      <Text
        color={"brand.200"}
        fontSize={"md"}
        fontWeight={"bold"}
        lineHeight={1}
      >
        {title}
      </Text>
    </Stack>
  );
};

export const AnimeInfoStatsContainer = ({
  children,
}: AnimeInfoStatsContainerProps) => {
  return (
    <Stack gap={2} w={"100%"} px={4}>
      {children}
    </Stack>
  );
};
export const AnimeInfoStats = ({ title, content }: AnimeInfoStatsProps) => {
  return (
    <Text fontWeight={"bold"} color={"white"} fontSize={"sm"}>
      {title}:{" "}
      <Text fontWeight={"normal"} as={"span"}>
        {content}
      </Text>
    </Text>
  );
};

export const AnimeInfoStatsTag = ({content, title}: AnimeInfoStatsTagProps) => {
    return <Stack direction={'row'} border={'white 1px solid'} borderRadius={'full'} justify={'center'} align={'center'}>
        <Stack  bgColor={'brand.100'} borderRadius={'full'} py={1} px={4}><Text fontSize={'small'} fontWeight={'bold'} color={'brand.200'}>{title}</Text></Stack>
        <Text pr={4} pl={2} fontSize={'small'} color={'white'} fontWeight={'light'}>{content}</Text>
    </Stack>
}
