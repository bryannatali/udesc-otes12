import { v4 as uuid } from 'uuid'

type User = {
  id: string
  firstName: string
  lastName?: string
  email: string
  username: string
}

type CreateUserProps = {
  name: string
  email: string
}

function createUser({ name, email }: CreateUserProps): User {
  const [firstName, lastName] = name.split(' ')

  const [username] = email.split('@')

  return {
    id: uuid(),
    firstName,
    lastName,
    email,
    username,
  }
}

const user1 = createUser({
  name: 'Bryan Natali',
  email: 'bryannatali01@gmail.com',
})

const user2 = createUser({
  name: 'Pedro',
  email: 'pedro@outlook.com',
})

const user3 = createUser({
  name: 'Luana Bush',
  email: 'luana.bush@gmail.com'
})

console.log(user1, user2, user3)