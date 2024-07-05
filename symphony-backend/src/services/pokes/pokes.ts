// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  pokeDataValidator,
  pokePatchValidator,
  pokeQueryValidator,
  pokeResolver,
  pokeExternalResolver,
  pokeDataResolver,
  pokePatchResolver,
  pokeQueryResolver
} from './pokes.schema'

import type { Application } from '../../declarations'
import { PokeService, getOptions } from './pokes.class'
import { pokePath, pokeMethods } from './pokes.shared'

export * from './pokes.class'
export * from './pokes.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const poke = (app: Application) => {
  // Register our service on the Feathers application
  app.use(pokePath, new PokeService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: pokeMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(pokePath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(pokeExternalResolver),
        schemaHooks.resolveResult(pokeResolver)
      ]
    },
    before: {
      all: [schemaHooks.validateQuery(pokeQueryValidator), schemaHooks.resolveQuery(pokeQueryResolver)],
      find: [],
      get: [],
      create: [schemaHooks.validateData(pokeDataValidator), schemaHooks.resolveData(pokeDataResolver)],
      patch: [schemaHooks.validateData(pokePatchValidator), schemaHooks.resolveData(pokePatchResolver)],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [pokePath]: PokeService
  }
}
