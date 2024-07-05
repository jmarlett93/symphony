"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pokeQueryResolver = exports.pokeQueryValidator = exports.pokeQuerySchema = exports.pokeQueryProperties = exports.pokePatchResolver = exports.pokePatchValidator = exports.pokePatchSchema = exports.pokeDataResolver = exports.pokeDataValidator = exports.pokeDataSchema = exports.pokeExternalResolver = exports.pokeResolver = exports.pokeValidator = exports.pokeSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Main data model schema
exports.pokeSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    text: typebox_1.Type.String(),
    user_from: typebox_1.Type.Number(),
    user_to: typebox_1.Type.Number()
}, { $id: 'Poke', additionalProperties: false });
exports.pokeValidator = (0, typebox_1.getValidator)(exports.pokeSchema, validators_1.dataValidator);
exports.pokeResolver = (0, schema_1.resolve)({});
exports.pokeExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.pokeDataSchema = typebox_1.Type.Pick(exports.pokeSchema, ['text'], {
    $id: 'PokeData'
});
exports.pokeDataValidator = (0, typebox_1.getValidator)(exports.pokeDataSchema, validators_1.dataValidator);
exports.pokeDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
exports.pokePatchSchema = typebox_1.Type.Partial(exports.pokeSchema, {
    $id: 'PokePatch'
});
exports.pokePatchValidator = (0, typebox_1.getValidator)(exports.pokePatchSchema, validators_1.dataValidator);
exports.pokePatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.pokeQueryProperties = typebox_1.Type.Pick(exports.pokeSchema, ['id', 'text']);
exports.pokeQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.pokeQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.pokeQueryValidator = (0, typebox_1.getValidator)(exports.pokeQuerySchema, validators_1.queryValidator);
exports.pokeQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=pokes.schema.js.map