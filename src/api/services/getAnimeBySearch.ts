import axios from "axios";
import { TAnimeSearch } from "../types/TAnimeSearch";

type getAnimeBySearchProps = {
  querySearch: string
}

export const getAnimeBySearch = async ({querySearch}: getAnimeBySearchProps): Promise<TAnimeSearch> => {
  const { data } = await axios.get(`https://api.jikan.moe/v4/anime?q=${querySearch}`);
  return data;
};
