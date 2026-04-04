export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('custom_items').del()

  // Inserts seed entries
  await knex('custom_items').insert([
    { id: 1, menu_item_id: 4, name: 'Sprinkles', extra_cost: 0.5 },
    { id: 2, menu_item_id: 5, name: 'Straw', extra_cost: 0.0 },
    { id: 3, menu_item_id: 6, name: 'Strawberry', extra_cost: 1.0 },
    { id: 4, menu_item_id: 8, name: 'Side Salad', extra_cost: 3.0 },
    { id: 5, menu_item_id: 8, name: 'Secret Sauce', extra_cost: 1.5 },
    { id: 6, menu_item_id: 11, name: 'Swiss Cheese', extra_cost: 1.0 },
  ])
}
