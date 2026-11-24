import httpClient from './http'

export interface User {
  id: number
  name: string
  email: string
  company: {
    name: string
  }
}

export async function getUser(id: number): Promise<User> {
  const { data } = await httpClient.get<User>(`/users/${id}`)
  return data
}
