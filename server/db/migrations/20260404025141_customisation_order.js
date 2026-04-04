export function up(knex) {
  return knex.schema.createTable('customisation_order', (table) => {
    table.increments('id').primary()
    table.integer('menu_order_id').references('id').inTable('menu_order')
    table
      .integer('customisation_item_id')
      .references('id')
      .inTable('custom_items')
  })
}

export function down(knex) {
  return knex.schema.dropTable('customisation_order')
}
