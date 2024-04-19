import { useQuery } from "@tanstack/react-query";
import { getAnimeById } from "../services";

type useGetAnimeByIdProps = {
  id: number;
};
export const useGetAnimeById = ({ id }: useGetAnimeByIdProps) => {
  return useQuery({
    queryKey: ["animeById", id],
    queryFn: () => getAnimeById(id),
  });
};
