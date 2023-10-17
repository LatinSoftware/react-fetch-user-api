import { type PersonResponse, type Person } from '../interfaces/person'

interface Response {
  data: Person[]
  nextCursor: number
}
const url = 'https://randomuser.me/api/?results=20&nat=es,us,ca,fr,au&seed=ramon'
export async function PersonsGet ({ pageParam = 1 }: { pageParam?: number }): Promise<Response> {
  const response = await fetch(url.concat(`&page=${pageParam}`))
  const data = await response.json() as PersonResponse
  return {
    data: data.results,
    nextCursor: data.info.page
  }
}
