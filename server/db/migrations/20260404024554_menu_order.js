export function up(knex) {
  return knex.schema.createTable('menu_order', (table) => {
    table.increments('id').primary()
    table.integer('order_id')
    table.integer('menu_item_id').references('id').inTable('menu_items')
  })
}

export function down(knex) {
  return knex.schema.dropTable('menu_order')
}
