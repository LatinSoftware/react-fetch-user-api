import { useCallback, useMemo, useState } from 'react'

import './App.css'
import { Search } from './components/Search'

import { PersonList } from './components/PersonList'
import { type Filter } from './interfaces/filter'
import { type Gender } from './interfaces/person'
import { useUser } from './hooks/useUser'

function App () {
  const {
    users,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useUser()

  const [filterName, setFilterName] = useState('')
  const [filterCountry, setFilterCountry] = useState<string | undefined>()
  const [filterGender, setFilterGender] = useState<Gender | undefined>(undefined)

  const onSubmit = useCallback(({ name = '', country, gender }: Filter) => {
    setFilterName(name)
    setFilterGender(gender)
    setFilterCountry(country)
  }, [])

  const filteredUser = useMemo(() => {
    const dataFiltered = users?.filter(user => {
      const fullName = `${user.name.first} ${user.name.last}`.toLowerCase()
      const isNameMatch = filterName !== '' ? fullName.includes(filterName.toLowerCase()) : true // Si filterName está vacío, se considera una coincidencia.
      const isGenderMatch = (filterGender != null) ? user.gender === filterGender : true
      const isCityMatch = (filterCountry != null) ? user.nat.toLowerCase() === filterCountry : true
      return isNameMatch && isGenderMatch && isCityMatch
    })

    if (dataFiltered?.length > 0) { return dataFiltered ?? [] } else { return users }
  }, [users, filterName, filterGender, filterCountry])

  return (
    <main>
      <section className='filter-container'>
        <Search onSubmit={onSubmit} />
      </section>
      <PersonList users={filteredUser} isLoading = {isLoading} />
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
