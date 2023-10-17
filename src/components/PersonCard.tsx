import { type Person } from '../interfaces/person'

interface Props {
  person: Person
}
export function PersonCard ({ person }: Props) {
  return (
    <div key={person.id.value}>
      <img src={person.picture.large} alt={person.name.title} />
      <div>
        <span>{person.name.title}. {person.name.first} {person.name.last}</span>
      </div>
    </div>
  )
}
