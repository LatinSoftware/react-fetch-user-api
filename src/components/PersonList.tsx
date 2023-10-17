import { type Person } from '../interfaces/person'
import { PersonCard } from './PersonCard'

interface Props {
  isLoading: boolean
  users: Person[]
}

export function PersonList ({ isLoading, users }: Props) {
  return (
        <section className='person-container'>
        {isLoading && <span>Loading...</span>}
        {users.map(person => (
          <PersonCard key={person.id.value} person={person} />
        ))}
      </section>
  )
}
