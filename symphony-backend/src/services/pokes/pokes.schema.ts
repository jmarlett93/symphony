// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, virtual } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { PokeService } from './pokes.class'
import { userSchema } from '../users/users.schema'

// Main data model schema
export const pokeSchema = Type.Object(
  {
    id: Type.Number(),
    text: Type.String(),
    userFromId: Type.Number(),
    userFrom: Type.Ref(userSchema),
    userToId: Type.Number(),
    userTo: Type.Ref(userSchema),
    createdAt: Type.Number(),
    updatedAt: Type.Number()
  },
  { $id: 'Poke', additionalProperties: false }
)
export type Poke = Static<typeof pokeSchema>
export const pokeValidator = getValidator(pokeSchema, dataValidator)
export const pokeResolver = resolve<Poke, HookContext>({
  userFrom: virtual(async (poke, context) => {
    // Associate the user that sent the poke
    return context.app.service('users').get(poke.userFromId)
  }),
  userTo: virtual(async (poke, context) => {
    // Associate the user that received the poke
    return context.app.service('users').get(poke.userToId)
  })
})

export const pokeExternalResolver = resolve<Poke, HookContext<PokeService>>({})

// Schema for creating new entries
export const pokeDataSchema = Type.Pick(pokeSchema, ['text', 'userToId', 'userFromId'], {
  $id: 'PokeData',
})
export type PokeData = Static<typeof pokeDataSchema>
export const pokeDataValidator = getValidator(pokeDataSchema, dataValidator)
export const pokeDataResolver = resolve<Poke, HookContext>({
  userFromId: (value, message, context) => context.params?.user.userFromId,
  userToId: (value, message, context) => context.params?.user.userToId,
  createdAt: () => Date.now()
})


// Schema for updating existing entries
export const pokePatchSchema = Type.Partial(pokeSchema, {
  $id: 'PokePatch'
})
export type PokePatch = Static<typeof pokePatchSchema>
export const pokePatchValidator = getValidator(pokePatchSchema, dataValidator)
export const pokePatchResolver = resolve<Poke, HookContext>({
  userFromId: (value, message, context) => context.params?.user.userFromId,
  userToId: (value, message, context) => context.params?.user.userToId,
  updatedAt: () => Date.now()
})

// Schema for allowed query properties
export const pokeQueryProperties = Type.Pick(pokeSchema, ['id', 'text', 'userFromId', 'userToId', 'createdAt', 'updatedAt'])
export const pokeQuerySchema = Type.Intersect(
  [
    querySyntax(pokeQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type PokeQuery = Static<typeof pokeQuerySchema>
export const pokeQueryValidator = getValidator(pokeQuerySchema, queryValidator)
export const pokeQueryResolver = resolve<PokeQuery, HookContext<PokeService>>({})
