// @ts-nocheck
import { API_URL } from "@/constants/api";
import useSWR from "swr";

const defaultFetcher = (...args) => fetch(...args).then((res) => res.json());

export default async function callApi(endpoint: string): {
  data: any;
  error: boolean;
  message: string;
} {
  try {
    const res = await fetch(`${API_URL}/api/${endpoint}`);
    if (res.ok) return { error: false, data: await res.json() };
    else return { error: true, message: res.statusText };
  } catch (e) {
    const errorMessage = "Network error: " + e.message;
    return { error: true, message: errorMessage };
  }
}

export const useAPI = (endpoint, fetcher = defaultFetcher) => {
  const { data, error, isLoading, isValidating } = useSWR(
    `${API_URL}/api/${endpoint}`,
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
