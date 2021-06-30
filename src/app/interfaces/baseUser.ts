export interface BaseUser {
  id: string
  email: string
  password: string
  username: string
  roles : [
    id: number,
    name: string
  ]
}
