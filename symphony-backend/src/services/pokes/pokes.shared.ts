// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Poke, PokeData, PokePatch, PokeQuery, PokeService } from './pokes.class'

export type { Poke, PokeData, PokePatch, PokeQuery }

export type PokeClientService = Pick<PokeService<Params<PokeQuery>>, (typeof pokeMethods)[number]>

export const pokePath = 'pokes'

export const pokeMethods: Array<keyof PokeService> = ['find', 'get', 'create', 'patch', 'remove']

export const pokeClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(pokePath, connection.service(pokePath), {
    methods: pokeMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [pokePath]: PokeClientService
  }
}
