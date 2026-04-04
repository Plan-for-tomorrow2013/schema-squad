export function up(knex) {
  return knex.schema.createTable('custom_items', (table) => {
    table.increments('id').primary()
    table.integer('menu_item_id').references('id').inTable('menu_items')
    table.string('name')
    table.decimal('extra_cost', 10, 2)
  })
}

export function down(knex) {
  return knex.schema.dropTable('custom_items')
}
