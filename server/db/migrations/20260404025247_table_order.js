export function up(knex) {
  return knex.schema.createTable('table_order', (table) => {
    table.increments('id').primary()
  })
}

export function down(knex) {
  return knex.schema.dropTable('table_order')
}
