import { useState } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import './App.css'
import { Search } from './components/Search'
import { PersonsGet } from './service/PersonService'
import { type Person } from './interfaces/person'
import { PersonList } from './components/PersonList'

const initialData: Person[] = []

function App () {
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

  const users = data?.pages?.flatMap((page) => page.data) ?? []
  const onSubmit = () => {
    console.log('hola mundo')
    console.log(data)
  }
  // const onSubmit = useCallback(({ name = '', city, gender }: Filter) => {
  //   const filteredPerson = persons?.filter((person) =>
  //     person.name.first.concat(person.name.last).toLocaleLowerCase().includes(name.toLocaleLowerCase()) ||
  //     person.location.city === city ||
  //     person.gender === gender)

  //   console.log({
  //     filteredPerson
  //   })

  //   setFilterUsers(filteredPerson ?? persons ?? [])
  // }, [])

  return (
    <main>
      <section className='filter-container'>
        <Search onSubmit={onSubmit} />
      </section>
      <PersonList users={users} isLoading = {isLoading} />
      <div>
        <button
        disabled={hasNextPage === false || isFetchingNextPage}
        onClick={async () => await fetchNextPage()}
        > {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage === true
            ? 'Load More'
            : 'Nothing more to load'}</button>
      </div>
    </main>
  )
}

export default App
