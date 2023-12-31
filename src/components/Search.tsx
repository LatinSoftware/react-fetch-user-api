import { FilterIcon, SearchIcon } from '../icons'
import { type Filter } from '../interfaces/filter'
import { type Gender } from '../interfaces/person'

interface Props {
  onSubmit: (filter: Filter) => void
}
export function Search ({ onSubmit }: Props) {
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data: Filter = {
      name: formData.get('name')?.toString(),
      country: formData.get('city')?.toString(),
      activeRow: true,
      gender: formData.get('gender') as Gender

    }
    onSubmit(data)
  }

  return (

    <form className='filter-search' onSubmit={handleOnSubmit}>
      <div>
        <label htmlFor='name'>Search by name</label>
        <input name='name' id='name' type="text" placeholder='Search...' />
      </div>
      <div>
        <label htmlFor='city'>city</label>
        <select name='city' id='city' placeholder='city' >
          <option value='' >Seleccione una opcion....</option>
          <option value='es'>España</option>
          <option value='ca'>Canada</option>
          <option value='fr'>Francia</option>
          <option value='us'>Estados Unidos</option>
          <option value='au'>Australia</option>
        </select>
      </div>
      <div className='gender-container'>
        <label htmlFor='gender'>Genero</label>
        <div>
          <input type="radio" name='gender' id='gender' value="female" /> Femenino
          <input type="radio" name='gender' id='gender' value="male" /> Masculino
        </div>
      </div>
      <div>
        <button type="submit" title='search'>
          <SearchIcon />
        </button>
        <button type="reset" title='filter'>
          <FilterIcon />
        </button>
      </div>

    </form>
  )
}
