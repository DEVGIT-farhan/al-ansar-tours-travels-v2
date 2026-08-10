import { useSearchParams } from "react-router-dom";

export default function usePackageFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  function setParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    setSearchParams(params);
  }

  return {
    search: searchParams.get("search") ?? "",
    category: searchParams.get("category") ?? "",
    destination: searchParams.get("destination") ?? "",
    duration: searchParams.get("duration") ?? "",
    price: searchParams.get("price") ?? "",
    sort: searchParams.get("sort") ?? "newest",

    setSearch: (value: string) => setParam("search", value),

    setCategory: (value: string) => setParam("category", value),

    setDestination: (value: string) => setParam("destination", value),

    setDuration: (value: string) => setParam("duration", value),

    setPrice: (value: string) => setParam("price", value),

    setSort: (value: string) => setParam("sort", value),
  };
}
