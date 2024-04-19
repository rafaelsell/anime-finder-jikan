import { useQuery } from "@tanstack/react-query";
import { getAnimeBySearch } from "../services/getAnimeBySearch";

type useGetAnimeBySearchProps = {
  searchQuery?: string;
};
export const useGetAnimeBySearch = ({ searchQuery }: useGetAnimeBySearchProps) => {
  return useQuery({
    queryKey: ["animeBySearch", searchQuery ?? ''],
    queryFn: () => getAnimeBySearch({querySearch: searchQuery ?? ''}),
  });
};