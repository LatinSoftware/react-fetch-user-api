import { type Gender } from './person'

export interface Filter {
  name?: string
  city?: string
  activeRow: boolean
  gender?: Gender
}
