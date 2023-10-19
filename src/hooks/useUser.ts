import { PersonsGet } from '../service/PersonService'
import { useInfiniteQuery } from '@tanstack/react-query'

export function useUser () {
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteQuery({
    queryKey: ['users'],
    queryFn: PersonsGet,
    getNextPageParam: (lastPage, page) => lastPage.nextCursor + 1
  })

  return {
    users: data?.pages?.flatMap((page) => page.data) ?? [],
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  }
}
