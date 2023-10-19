import { type Person } from '../interfaces/person'
import { PersonCard } from './PersonCard'

interface Props {
  isLoading: boolean
  users: Person[]
}

export function PersonList ({ isLoading, users }: Props) {
  return (
        <section className='
        grid
        xs:grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-3'>
        {isLoading && <span>Loading...</span>}
        {users.map(person => (
          <PersonCard key={person.id.value} person={person} />
        ))}
      </section>
  )
}
