import { room } from './rooms/rooms'
import { poke } from './pokes/pokes'
import { user } from './users/users'
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html#configure-functions
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(room)
  app.configure(poke)
  app.configure(user)
  // All services will be registered here
}
