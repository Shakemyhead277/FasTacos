import { useEffect } from 'react';
import MenuCategory from '../components/MenuCategory';

type Category = {
  id: string;
  emoji: string;
  title: string;
  note?: string;
  items: { name: string; price: string }[];
  mustTry?: boolean;
};

const categories: Category[] = [
  {
    id: 'tacos',
    emoji: '🌮',
    title: 'TACOS',
    note: 'All tacos include cilantro and onion. Extras & combinations: +$1.00',
    items: [
      { name: 'Asada / Steak', price: '$4.19' },
      { name: 'Pastor / Pork', price: '$4.19' },
      { name: 'Pollo / Chicken', price: '$3.99' },
      { name: 'Lengua / Tongue', price: '$4.19' },
      { name: 'Tripa / Tripe', price: '$4.19' },
      { name: 'Barbacoa / Steam Beef', price: '$4.19' },
      { name: 'Chile Relleno / Pepper', price: '$3.99' },
      { name: 'Molida / Ground Beef', price: '$3.99' },
      { name: 'Chorizo / Mexican Sausage', price: '$3.99' },
    ],
  },
  {
    id: 'tortas',
    emoji: '🥖',
    title: 'TORTAS',
    note: 'Tortas include beans, lettuce, tomato, avocado, and sour cream. Extras & combinations: +$1.00',
    items: [
      { name: 'Asada / Steak', price: '$9.99' },
      { name: 'Pastor / Pork', price: '$9.99' },
      { name: 'Pollo / Chicken', price: '$8.99' },
      { name: 'Lengua / Tongue', price: '$9.99' },
      { name: 'Barbacoa / Steam Beef', price: '$9.99' },
      { name: 'Chorizo / Mexican Sausage', price: '$8.99' },
    ],
  },
  {
    id: 'quesadillas',
    emoji: '🧀',
    title: 'QUESADILLAS',
    note: 'Extras & combinations: +$1.00',
    items: [
      { name: 'Asada / Steak', price: '$4.99' },
      { name: 'Pastor / Pork', price: '$4.99' },
      { name: 'Pollo / Chicken', price: '$4.50' },
      { name: 'Lengua / Tongue', price: '$4.99' },
      { name: 'Tripa / Tripe', price: '$4.99' },
      { name: 'Barbacoa / Steam Beef', price: '$4.99' },
      { name: 'Molida / Ground Beef', price: '$4.50' },
      { name: 'Chorizo / Mexican Sausage', price: '$4.50' },
      { name: 'Queso / Cheese', price: '$3.50' },
    ],
  },
  {
    id: 'burritos',
    emoji: '🌯',
    title: 'BURRITOS',
    note: 'Burritos include beans, cilantro, onion, lettuce, tomato, and cheese. Extras & combinations: +$0.50',
    items: [
      { name: 'Asada / Steak', price: '$10.99' },
      { name: 'Pastor / Pork', price: '$10.99' },
      { name: 'Pollo / Chicken', price: '$9.99' },
      { name: 'Lengua / Tongue', price: '$10.99' },
      { name: 'Tripa / Tripe', price: '$10.99' },
      { name: 'Barbacoa / Steam Beef', price: '$10.99' },
      { name: 'Chorizo / Mexican Sausage', price: '$9.99' },
      { name: 'Chile Relleno / Pepper', price: '$9.99' },
      { name: 'Vegetariano / Veggies', price: '$9.99' },
      { name: 'Huevos con Chorizo / Eggs with Mexican Sausage', price: '$9.99' },
    ],
  },
  {
    id: 'enchiladas',
    emoji: '🫔',
    title: 'ENCHILADAS',
    note: 'Choice of meat with rice, beans, lettuce, tomato, and sour cream.',
    items: [{ name: 'Enchiladas', price: '$17.99' }],
  },
  {
    id: 'tostadas',
    emoji: '🥗',
    title: 'TOSTADAS',
    note: 'Choice of meat with beans, lettuce, tomato, and sour cream.',
    items: [{ name: 'Tostada', price: '$4.50' }],
  },
  {
    id: 'fajitas',
    emoji: '🥩',
    title: 'FAJITAS',
    note: 'Choose steak or chicken. Served with green pepper, yellow pepper, onion, rice, beans, and tortillas.',
    items: [{ name: 'Fajitas', price: '$19.99' }],
  },
  {
    id: 'nachos',
    emoji: '🧀',
    title: 'NACHOS',
    note: 'Extras: Aguacate / Avocado +$1.00 | Crema / Sour Cream +$1.00 | Queso / Cheese +$1.00',
    mustTry: true,
    items: [
      { name: 'Nachos con Carne Molida / Ground Beef', price: '$9.99' },
      { name: 'Nachos con Carne al Pastor / Pork', price: '$9.99' },
      { name: 'Nachos con Chorizo / Mexican Sausage', price: '$9.99' },
      { name: 'Nachos con Pollo / Chicken', price: '$9.99' },
      { name: 'Nachos con Carne Asada / Steak', price: '$9.99' },
    ],
  },
  {
    id: 'sides',
    emoji: '🍚',
    title: 'SIDES',
    items: [
      { name: 'Arroz / Rice', price: '$6.00' },
      { name: 'Frijoles / Beans', price: '$6.00' },
    ],
  },
  {
    id: 'drinks',
    emoji: '🥤',
    title: 'DRINKS',
    items: [
      { name: 'Botellas / Bottles', price: '$3.25' },
      { name: 'Latas / Cans', price: '$1.99' },
      { name: 'Agua de Horchata Lrg', price: '$3.50' },
    ],
  },
];

export default function Menu() {
  useEffect(() => {
    document.title = 'Menu | Fastacos';
  }, []);

  return (
    <div className="pt-16 bg-[#FDF6EC]">
      <section className="bg-[#C0392B] px-4 py-16 text-center text-white">
        <div className="text-3xl">🌮🌯🧀🥑🌶️</div>
        <h1 className="mt-5 font-display text-6xl">OUR MENU</h1>
        <p className="mt-3 text-lg">Fresh, authentic Mexican — made to order.</p>
      </section>

      <div className="sticky top-16 z-30 overflow-x-auto border-b bg-[#FDF6EC] px-4 py-4 scrollbar-hide">
        <div className="mx-auto flex w-max gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => document.getElementById(category.id)?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full border-2 border-[#C0392B] bg-white px-4 py-2 text-sm font-bold text-[#C0392B] transition hover:bg-[#F39C12] hover:text-stone-900"
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pt-6">
        <div className="rounded-lg bg-[#F39C12] px-5 py-4 text-sm font-semibold text-stone-900">
          🌮 All prices shown do not include taxes. For allergen/dietary questions, call us at 815-337-2688.
        </div>
      </div>

      {categories.map((category) => (
        <MenuCategory
          key={category.id}
          id={category.id}
          emoji={category.emoji}
          title={category.title}
          note={category.note}
          items={category.items}
          mustTry={category.mustTry}
        />
      ))}

      <section className="bg-[#27AE60] px-4 py-16 text-center text-white">
        <h2 className="font-display text-4xl">READY TO ORDER?</h2>
        <p className="mt-3">Call us at 815-337-2688 or stop by either location!</p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com/maps/search/?api=1&query=150+S+Eastwood+Dr+Woodstock+IL+60098"
          className="mt-6 inline-block rounded-full bg-[#F39C12] px-7 py-3 font-bold text-stone-900 transition hover:scale-105"
        >
          Get Directions – Woodstock
        </a>
      </section>
    </div>
  );
}
