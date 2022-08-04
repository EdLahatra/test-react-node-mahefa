import { inputObjectType, objectType } from "nexus"
import { Context } from "../../utils/context"

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.string('id')
    t.nonNull.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('updatedAt', { type: 'DateTime' })
    t.string('access_token')
    t.string('comments')
    t.string('Attribute2')
    t.string('Attribute3')
    t.string('Attribute4')
  },
})


