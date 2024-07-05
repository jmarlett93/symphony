import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Poke, PokeData, PokePatch, PokeQuery } from './pokes.schema';
export type { Poke, PokeData, PokePatch, PokeQuery };
export interface PokeParams extends KnexAdapterParams<PokeQuery> {
}
export declare class PokeService<ServiceParams extends Params = PokeParams> extends KnexService<Poke, PokeData, PokeParams, PokePatch> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
