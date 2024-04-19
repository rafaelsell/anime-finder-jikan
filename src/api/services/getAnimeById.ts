import axios from "axios";
import { TAnime } from "../types/TAnime";

export const getAnimeById = async (id: number): Promise<TAnime> => {
  const { data } = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
  return data;
};
