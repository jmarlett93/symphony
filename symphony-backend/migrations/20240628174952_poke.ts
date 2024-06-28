import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
      await knex.schema.alterTable('pokes', (table) => {
        table.bigint('createdAt')
        table.bigint('userFromId').references('id').inTable('users')
        table.bigint('userToId').references('id').inTable('users')
      })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable('pokes', (table) => {
        table.dropColumn('createdAt')
        table.dropColumn('userFromId')
        table.dropColumn('userToId')
      })
}

