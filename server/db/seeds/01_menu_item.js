export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('menu_items').del()

  // Inserts seed entries
  await knex('menu_items').insert([
    { id: 1, name: 'Salmon Bowl', price: 18.0 },
    { id: 2, name: 'Sushi', price: 15.0 },
    { id: 3, name: 'Spring Rolls', price: 8.0 },
    { id: 4, name: 'Sundae', price: 6.0 },
    { id: 5, name: 'Soda', price: 3.5 },
    { id: 6, name: 'Smoothie', price: 7.0 },
    { id: 7, name: 'Spiced Chai Latte', price: 5.5 },
    { id: 8, name: 'Smash Burger', price: 14.0 },
    { id: 9, name: 'Steak', price: 25.0 },
    { id: 10, name: 'Soup', price: 9.0 },
    { id: 11, name: 'Sliders', price: 12.0 },
  ])
}
