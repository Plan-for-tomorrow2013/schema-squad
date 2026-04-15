export async function seed(knex) {
  // Delete dependent records first
  await knex('menu_order').del()
  await knex('customisation_order').del()
  await knex('custom_items').del()

  // Then delete menu_items
  await knex('menu_items').del()

  await knex('menu_items').insert([
    {
      id: 1,
      name: 'Salmon Bowl',
      price: 18.0,
      description:
        'Fresh Atlantic salmon over steamed rice with avocado, cucumber and sesame dressing.',
      image: 'salmon_bowl.png',
    },
    {
      id: 2,
      name: 'Sushi',
      price: 15.0,
      description:
        "Chef's selection of premium nigiri and maki rolls, served with pickled ginger and wasabi.",
      image: 'sushi.png',
    },
    {
      id: 3,
      name: 'Spring Rolls',
      price: 8.0,
      description:
        'Crispy golden rolls filled with seasoned vegetables, served with sweet chilli dipping sauce.',
      image: 'spring_rolls.png',
    },
    {
      id: 4,
      name: 'Sundae',
      price: 6.0,
      description:
        'Creamy vanilla ice cream topped with chocolate sauce and rainbow sprinkles.',
      image: 'sundae.png',
    },
    {
      id: 5,
      name: 'Soda',
      price: 3.5,
      description:
        'Chilled soft drink in your choice of flavour — cola, lemon, or orange.',
      image: 'soda.png',
    },
    {
      id: 6,
      name: 'Smoothie',
      price: 7.0,
      description:
        'Freshly blended strawberry and banana smoothie, made to order with your choice of milk.',
      image: 'smoothie.png',
    },
    {
      id: 7,
      name: 'Spiced Chai Latte',
      price: 5.5,
      description:
        'Aromatic spiced chai concentrate blended with steamed oat milk and a dusting of cinnamon.',
      image: 'chai.png',
    },
    {
      id: 8,
      name: 'Smash Burger',
      price: 14.0,
      description:
        'Double smashed beef patty with melted cheese, pickles, caramelised onion and secret sauce.',
      image: 'smash_burger.png',
    },
    {
      id: 9,
      name: 'Steak',
      price: 25.0,
      description:
        '250g grass-fed sirloin cooked to your liking, served with seasonal vegetables and chips.',
      image: 'steak.png',
    },
    {
      id: 10,
      name: 'Soup',
      price: 9.0,
      description:
        "House-made soup of the day, served with warm crusty bread. Ask your server for today's variety.",
      image: 'soup.png',
    },
    {
      id: 11,
      name: 'Sliders',
      price: 12.0,
      description:
        'Three mini beef sliders with lettuce, tomato and house sauce on toasted brioche buns.',
      image: 'sliders.png',
    },
  ])
}
