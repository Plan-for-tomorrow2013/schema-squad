export function up(knex) {
  return knex.schema.createTable('menu_items', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.decimal('price', 10, 2)
  })
}

export function down(knex) {
  return knex.schema.dropTable('menu_items')
}
