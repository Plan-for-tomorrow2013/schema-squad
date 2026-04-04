export function up(knex) {
  return knex.schema.createTable('receipt', (table) => {
    table.increments('id').primary()
    table.integer('table_order_id').references('id').inTable('table_order')
    table.decimal('total_cost', 10, 2)
  })
}

export function down(knex) {
  return knex.schema.dropTable('receipt')
}
