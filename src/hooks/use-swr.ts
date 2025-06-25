// @ts-nocheck
import { API_URL } from "@/constants/api";
import useSWR from "swr";

const defaultFetcher = (...args) => fetch(...args).then((res) => res.json());

export default async function callApi(
  endpoint: string,
  type = 1
): {
  data: any;
  error: boolean;
  message: string;
} {
  try {
    let res = await fetch(`${API_URL}/api/${endpoint}`, {
      cache: "no-store",
    });
    if (type === 2) {
      res = await fetch(`${API_URL}/coaches_program/${endpoint}`);
    }

    if (res.ok) return { error: false, data: await res.json() };
    else return { error: true, message: res.statusText };
  } catch (e) {
    const errorMessage = "Network error: " + e.message;
    return { error: true, message: errorMessage };
  }
}

export const useAPI = (endpoint, type = 1, fetcher = defaultFetcher) => {
  const url = `${API_URL}${
    type === 1 ? "/api/" : "/coaches_program/"
  }${endpoint}`;

  const { data, error, isLoading, isValidating } = useSWR(
    `${API_URL}${type === 1 ? "/api/" : "/coaches_program/"}${endpoint}`,
    fetcher,
    {
      revalidateIfStale: true,
      refetchOnMount: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: 90000,
    }
  );

  return { data, error, isLoading: isLoading || isValidating || error };
};
