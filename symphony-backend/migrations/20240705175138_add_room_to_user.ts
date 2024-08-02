import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
      await knex.schema.alterTable('users', (table) => {
        table.bigint('roomId').references('id').inTable('rooms')
      })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable('users', (table) => {
        table.dropColumn('roomId')
      })
}

