import type { Application } from '../../declarations';
import { PokeService } from './pokes.class';
import { pokePath } from './pokes.shared';
export * from './pokes.class';
export * from './pokes.schema';
export declare const poke: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [pokePath]: PokeService;
    }
}
