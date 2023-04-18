import { useInfiniteQuery } from "react-query";
import { Querykey } from "api/react-query/QueryKey";
import { getFeeds } from "api/axios/axiosSetting";

interface UseFeed {
  feedData: any;
  fetchNextPage: (options?: any) => Promise<any>;
  isFetching: boolean;
  isLoading: boolean;
  hasNextPage?: boolean;
}

export const useFeed = (): UseFeed => {
  const fallBack: [] = [];
  const {
    data: feedData = fallBack,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
  } = useInfiniteQuery(
    // http://115.85.181.9/api/v1/feeds/group/category/?group_id=1&category_id=34
    Querykey.feedData,
    ({ pageParam = `/feeds/group/category/?group_id=1&category_id=34` }) =>
      getFeeds(pageParam),
    {
      getNextPageParam: (lastpage) => {
        if (lastpage.total_pages - lastpage.now_page > 0)
          return `/feeds/1/?page=${lastpage.now_page + 1}`;
        else {
          return undefined;
        }
      },
    }
  );

  return { feedData, fetchNextPage, hasNextPage, isFetching, isLoading };
};
