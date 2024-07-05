import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { Poke, PokeData, PokePatch, PokeQuery, PokeService } from './pokes.class';
export type { Poke, PokeData, PokePatch, PokeQuery };
export type PokeClientService = Pick<PokeService<Params<PokeQuery>>, (typeof pokeMethods)[number]>;
export declare const pokePath = "pokes";
export declare const pokeMethods: Array<keyof PokeService>;
export declare const pokeClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [pokePath]: PokeClientService;
    }
}
