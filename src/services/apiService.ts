import axios, { type AxiosRequestConfig } from "axios";
import type { Headers, Payload } from "../types";

const BASE_URL =
  "https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/refs/heads/main";

const headers: Headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const apiService = async (
  method: string,
  url: string,
  payload?: Payload
) => {
  const request_url = BASE_URL + url;

  const config: AxiosRequestConfig = {
    method,
    url: request_url,
    headers,
    ...(method !== "GET" && payload && { data: payload }),
  };

  try {
    const isConnected = await isConnectedToInternet();
    if (isConnected) {
      const response = await axios(config);
      return response.data;
    } else {
      console.error("No internet connection");
      return { success: false };
    }
  } catch (error: any) {
    const errorMessage =
      error?.response?.data?.message ?? error.message ?? "Something went wrong";
    console.error(errorMessage);
    return { success: false };
  }
};

const isConnectedToInternet = (): boolean => {
  return typeof window !== "undefined" ? navigator.onLine : true;
};
