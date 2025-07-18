import React from 'react'
import Tomato_Soup from '../images/Tomato_Soup.jpg';
import Garlic_Bread from '../images/Garlic_Bread.jpg';
import Grilled_Chicken from '../images/Grilled_Chicken.jpg';
import Veggie_Pasta from '../images/Veggie_Pasta.jpg';
import Cheese_Cake from '../images/Cheese_Cake.jpg';
import Ice_Cream from '../images/Ice_Cream.jpg';
import Lemonade from '../images/Lemonade.jpg';
import Cold_Coffee from '../images/Cold_Coffee.jpg';

const menuData = [
  {
    category: 'Starters',
    items: [
      { name: 'Tomato Soup', price: '₹99', img: Tomato_Soup, desc: 'A classic creamy tomato soup.' },
      { name: 'Garlic Bread', price: '₹79', img: Garlic_Bread, desc: 'Toasted bread with garlic and herbs.' },
    ],
  },
  {
    category: 'Main Course',
    items: [
      { name: 'Grilled Chicken', price: '₹299', img: Grilled_Chicken, desc: 'Served with seasonal vegetables.' },
      { name: 'Veggie Pasta', price: '₹199', img: Veggie_Pasta, desc: 'Pasta with fresh vegetables and herbs.' },
    ],
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Cheese Cake', price: '₹149', img: Cheese_Cake, desc: 'Rich and moist chocolate cake.' },
      { name: 'Ice Cream', price: '₹89', img: Ice_Cream, desc: 'Vanilla, chocolate, or strawberry.' },
    ],
  },
  {
    category: 'Drinks',
    items: [
      { name: 'Lemonade', price: '₹59', img: Lemonade, desc: 'Freshly squeezed lemons.' },
      { name: 'Cold Coffee', price: '₹69', img: Cold_Coffee, desc: 'Hot or iced.' },
    ],
  },
];

function Menu() {
  return (
    <section id="menu" className="p-8 bg-primary text-center min-h-screen pt-24">
      <h2 className="text-3xl font-bold mb-8 text-secondary">Menu</h2>
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {menuData.map((cat) => (
          <div key={cat.category}>
            <h3 className="text-xl font-semibold mb-4 text-secondary">{cat.category}</h3>
            <div className="space-y-6">
              {cat.items.map((item) => (
                <div key={item.name} className="bg-surface rounded-lg shadow p-4 flex flex-col items-center hover:bg-accent hover:bg-opacity-10 transition">
                  <img src={item.img} alt={item.name} className="w-full h-48 object-cover rounded mb-2" />
                  <div className="font-bold text-secondary">{item.name}</div>
                  <div className="text-gray-600 text-sm mb-1">{item.desc}</div>
                  <div className="text-secondary font-semibold">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Menu
