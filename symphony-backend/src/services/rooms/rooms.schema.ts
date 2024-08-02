// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { RoomService } from './rooms.class'

// Main data model schema
export const roomSchema = Type.Object(
  {
    id: Type.Number(),
    name: Type.String(),
    createdAt: Type.Number(),
    updatedAt: Type.Number()
  },
  { $id: 'Room', additionalProperties: false }
)
export type Room = Static<typeof roomSchema>
export const roomValidator = getValidator(roomSchema, dataValidator)
export const roomResolver = resolve<Room, HookContext<RoomService>>({})

export const roomExternalResolver = resolve<Room, HookContext<RoomService>>({})

// Schema for creating new entries
export const roomDataSchema = Type.Pick(roomSchema, ['name'], {
  $id: 'RoomData'
})
export type RoomData = Static<typeof roomDataSchema>
export const roomDataValidator = getValidator(roomDataSchema, dataValidator)
export const roomDataResolver = resolve<Room, HookContext>({
  createdAt: () => Date.now()
})

// Schema for updating existing entries
export const roomPatchSchema = Type.Partial(roomSchema, {
  $id: 'RoomPatch'
})
export type RoomPatch = Static<typeof roomPatchSchema>
export const roomPatchValidator = getValidator(roomPatchSchema, dataValidator)
export const roomPatchResolver = resolve<Room, HookContext>({
  // Return the current date
  updatedAt: () => Date.now()
})

// Schema for allowed query properties
export const roomQueryProperties = Type.Pick(roomSchema, ['id', 'name', 'createdAt', 'updatedAt'])
export const roomQuerySchema = Type.Intersect(
  [
    querySyntax(roomQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type RoomQuery = Static<typeof roomQuerySchema>
export const roomQueryValidator = getValidator(roomQuerySchema, queryValidator)
export const roomQueryResolver = resolve<RoomQuery, HookContext<RoomService>>({})
