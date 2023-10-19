import { type Person } from '../interfaces/person'

interface Props {
  person: Person
}
export function PersonCard ({ person }: Props) {
  const birthDate = new Date(person.dob.date)
  console.log(birthDate)

  return (
    <div key={person.id.value}
    className='border
    rounded-lg
    w-64
    h-64
    bg-base-100
    shadow-xl
    grid
    grid-rows-6
    justify-items-center
    dire
    '>
      <div className='mt-5 row-span-3'>
        <figure className='w-24 h-24'>
            <img src={person.picture.large}
            alt={person.name.first}
            className='rounded-full' />
          </figure>
      </div>
      <div className='text-center'>
        <h2>{person.name.first} {person.name.last}</h2>
        <small>{person.email}</small>
      </div>
      <div className='max-w-[80%] text-sm mt-2'>
        <p>
        {person.location.state},
        {person.location.city},
        {person.location.street.name},
        {person.location.street.number},
        </p>
      </div>
      <div className='text-xs w-full flex justify-between self-end'>
        <span>{birthDate.toISOString()}</span>
        <span>{person.phone}</span>
      </div>

      {/* <div className='card-body items-center text-center'>

        <p>
          <span></span>
        </p>
        <p>
          <span>{person.phone}</span>
        </p>
        <p>

        </p>
      </div>
      <div className='card-actions justify-end'>
        <div className='badge badge-outline'>
          {person.location.country}
        </div>
      </div> */}
    </div>
  )
}
