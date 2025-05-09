import { apiService } from "../services/apiService";
import type { SpaceDetailsType } from "../types";

export const fetchSpaces = async (): Promise<SpaceDetailsType[] | []> => {
  return await apiService("GET", "/data.json");
};
