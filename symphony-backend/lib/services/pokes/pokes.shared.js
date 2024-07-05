"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pokeClient = exports.pokeMethods = exports.pokePath = void 0;
exports.pokePath = 'pokes';
exports.pokeMethods = ['find', 'get', 'create', 'patch', 'remove'];
const pokeClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.pokePath, connection.service(exports.pokePath), {
        methods: exports.pokeMethods
    });
};
exports.pokeClient = pokeClient;
//# sourceMappingURL=pokes.shared.js.map