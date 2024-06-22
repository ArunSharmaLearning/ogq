import useSWR from "swr";

const defaultFetcher = (...args) => fetch(...args).then((res) => res.json());

export default async function callApi(endpoint: string) {
  const res = await fetch(
    `https://ogqbackend.pythonanywhere.com/api/${endpoint}`
  );
  if (res.ok) return await res.json();
}

export const useAPI = (endpoint, fetcher = defaultFetcher) => {
  const { data, error, isLoading, isValidating } = useSWR(
    `https://ogqbackend.pythonanywhere.com/api/${endpoint}`,
    fetcher,
    {
      revalidateIfStale: true,
      refetchOnMount: false,
    }
  );

  return { data, error, isLoading, isValidating };
};
