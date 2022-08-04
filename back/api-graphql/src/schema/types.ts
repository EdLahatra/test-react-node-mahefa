import { Mutation } from './mutation'
import { Query } from './query'
import { Subscription } from './subscription'
import Input from './input'

import { User } from './User'


export const types = [
  ...Input,
  ...Query,
  ...Mutation,
  ...Subscription,
  User,

]
