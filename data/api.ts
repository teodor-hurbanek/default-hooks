export const fetchBio = async (userName: User['name']): Promise<string | undefined> => {
  return new Promise<string | undefined>(resolve => {
    setTimeout(() => {
      const user = users.find(user => user.name === userName)
      resolve(user?.bio)
    }, 3000)
  })
}

const users = [
  {
    id: 1,
    name: 'Alice',
    bio: 'This is Alice’s bio.',
  },
  {
    id: 2,
    name: 'Bob',
    bio: 'This is Bob’s bio.',
  },
  {
    id: 3,
    name: 'John',
    bio: 'This is John’s bio.',
  },
]

export interface User {
  id: number
  name: string
  bio: string
}
