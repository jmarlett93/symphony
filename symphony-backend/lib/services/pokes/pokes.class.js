"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.PokeService = void 0;
const knex_1 = require("@feathersjs/knex");
// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
class PokeService extends knex_1.KnexService {
}
exports.PokeService = PokeService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('sqliteClient'),
        name: 'pokes'
    };
};
exports.getOptions = getOptions;
//# sourceMappingURL=pokes.class.js.map