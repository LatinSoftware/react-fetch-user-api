import { type Gender } from './person'

export interface Filter {
  name?: string
  country?: string
  activeRow: boolean
  gender?: Gender
}
