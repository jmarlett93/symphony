"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.poke = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
const authentication_1 = require("@feathersjs/authentication");
const schema_1 = require("@feathersjs/schema");
const pokes_schema_1 = require("./pokes.schema");
const pokes_class_1 = require("./pokes.class");
const pokes_shared_1 = require("./pokes.shared");
__exportStar(require("./pokes.class"), exports);
__exportStar(require("./pokes.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const poke = (app) => {
    // Register our service on the Feathers application
    app.use(pokes_shared_1.pokePath, new pokes_class_1.PokeService((0, pokes_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: pokes_shared_1.pokeMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(pokes_shared_1.pokePath).hooks({
        around: {
            all: [
                (0, authentication_1.authenticate)('jwt'),
                schema_1.hooks.resolveExternal(pokes_schema_1.pokeExternalResolver),
                schema_1.hooks.resolveResult(pokes_schema_1.pokeResolver)
            ]
        },
        before: {
            all: [schema_1.hooks.validateQuery(pokes_schema_1.pokeQueryValidator), schema_1.hooks.resolveQuery(pokes_schema_1.pokeQueryResolver)],
            find: [],
            get: [],
            create: [schema_1.hooks.validateData(pokes_schema_1.pokeDataValidator), schema_1.hooks.resolveData(pokes_schema_1.pokeDataResolver)],
            patch: [schema_1.hooks.validateData(pokes_schema_1.pokePatchValidator), schema_1.hooks.resolveData(pokes_schema_1.pokePatchResolver)],
            remove: []
        },
        after: {
            all: []
        },
        error: {
            all: []
        }
    });
};
exports.poke = poke;
//# sourceMappingURL=pokes.js.map