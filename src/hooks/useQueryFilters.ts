import { useRouter } from "next/navigation";
import qs from "qs";

const useQueryFilters = ({
  params,
}: {
  params: Record<string, string | number | string[]>;
}) => {
  const router = useRouter();

  const query = qs.stringify(params, {
    arrayFormat: "comma",
  });

  function queryFilters() {
    router.push(`?${query}`, { scroll: false });
  }

  return {
    queryFilters,
  };
};

export default useQueryFilters;
