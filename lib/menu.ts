// Menu data — single source of truth for the Full Menu page
// and homepage curated selections.
// Prices in IDR (Rp). Owner edits here to update everywhere.

export type MenuItem = {
  name: string;
  price: number;
  desc?: string;
  /** Tagged on homepage "Signature Drinks" and "Featured Food" rails. */
  featured?: boolean;
};

export type MenuCategory = {
  id: string;
  /** Stable key — used for anchors and i18n lookup. */
  key:
    | 'specialty-coffee'
    | 'non-coffee'
    | 'starter'
    | 'snacks'
    | 'pasta'
    | 'rice'
    | 'poultry'
    | 'burger-sandwich'
    | 'add-ons';
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: 'specialty-coffee',
    key: 'specialty-coffee',
    items: [
      {
        name: 'Double Dirty',
        price: 40,
        desc: 'double ristretto, house blend milk',
        featured: true,
      },
      {
        name: 'Montblanc',
        price: 42,
        desc: 'orange muscovado syrup, cold brew, vanilla cream, nutmeg, orange zest',
        featured: true,
      },
      {
        name: 'Dirty Blanc',
        price: 45,
        desc: 'espresso, white chocolate, fresh milk',
        featured: true,
      },
      {
        name: 'Butterly Goodness',
        price: 45,
        desc: 'double espresso, housemade caramel sauce, butterscotch, roasted almond, cream foam',
        featured: true,
      },
      {
        name: 'Dirty Matcha',
        price: 48,
        desc: 'matcha, espresso, fresh milk',
        featured: true,
      },
      { name: 'Espresso', price: 25 },
      { name: 'Double Espresso', price: 30 },
      { name: 'Macchiato', price: 28 },
      { name: 'Piccolo', price: 32 },
      { name: 'Flat White', price: 36 },
      { name: 'Cappuccino', price: 36 },
      { name: 'Caffe Latte', price: 36 },
      { name: 'Americano', price: 32 },
      { name: 'Cold Brew', price: 36 },
      { name: 'Vietnamese Coffee', price: 38 },
      { name: 'Kopi Susu Tetangga', price: 32 },
      { name: 'Coconut Latte', price: 40 },
      { name: 'Affogato', price: 45 },
      { name: 'Filter Coffee', price: 45 },
    ],
  },
  {
    id: 'non-coffee',
    key: 'non-coffee',
    items: [
      { name: 'Hot Chocolate', price: 36 },
      { name: 'Iced Chocolate', price: 38 },
      { name: 'Matcha Latte', price: 42 },
      { name: 'Iced Matcha', price: 42 },
      { name: 'Strawberry Yakult', price: 38 },
      { name: 'Iced Lychee Tea', price: 32 },
      { name: 'Iced Lemon Tea', price: 30 },
      { name: 'Cold Pressed Juice — Orange', price: 38 },
      { name: 'Cold Pressed Juice — Green', price: 40 },
    ],
  },
  {
    id: 'starter',
    key: 'starter',
    items: [
      { name: 'Truffle Fries', price: 45 },
      { name: 'Crispy Calamari', price: 58 },
      { name: 'Edamame', price: 32 },
      { name: 'Chicken Karaage', price: 48 },
    ],
  },
  {
    id: 'snacks',
    key: 'snacks',
    items: [
      { name: 'Churros with Chocolate', price: 38 },
      { name: 'Onion Rings', price: 36 },
      { name: 'Cheese Sticks', price: 38 },
    ],
  },
  {
    id: 'pasta',
    key: 'pasta',
    items: [
      {
        name: 'Kimchi Carbonara',
        price: 55,
        desc: 'spaghetti, homemade kimchi, carbonara sauce, sliced smoked beef, parmesan',
        featured: true,
      },
      {
        name: 'Truffle Cream Pasta',
        price: 65,
        desc: 'spaghetti, cream sauce, mushroom, white truffle oil, black truffle paste',
        featured: true,
      },
      {
        name: 'Mala Aglio Olio',
        price: 55,
        desc: 'spaghetti, mala spice, garlic, chili oil',
        featured: true,
      },
      { name: 'Spaghetti Bolognese', price: 55 },
    ],
  },
  {
    id: 'rice',
    key: 'rice',
    items: [
      {
        name: 'Truffle Gyudon',
        price: 68,
        desc: 'beef slices, soft egg, truffle paste, rice',
        featured: true,
      },
      { name: 'Chicken Teriyaki Rice', price: 52 },
      { name: 'Nasi Goreng Odd', price: 48 },
    ],
  },
  {
    id: 'poultry',
    key: 'poultry',
    items: [
      {
        name: 'Pan-Seared Duck',
        price: 98,
        desc: 'pan-seared duck, green peas purée, kalio sauce, tomato confit, hand-cut fries',
        featured: true,
      },
      { name: 'Crispy Chicken Steak', price: 62 },
    ],
  },
  {
    id: 'burger-sandwich',
    key: 'burger-sandwich',
    items: [
      { name: 'ODD Cheeseburger', price: 68 },
      { name: 'Crispy Chicken Sandwich', price: 55 },
      { name: 'Egg & Cheese Croissant', price: 42 },
    ],
  },
  {
    id: 'add-ons',
    key: 'add-ons',
    items: [
      { name: 'Extra Shot', price: 10 },
      { name: 'Oat Milk', price: 8 },
      { name: 'Extra Cheese', price: 12 },
      { name: 'Hand-cut Fries', price: 22 },
    ],
  },
];

export const featuredDrinks = menu
  .find((c) => c.key === 'specialty-coffee')!
  .items.filter((i) => i.featured);

export const featuredFood = [
  ...menu.find((c) => c.key === 'pasta')!.items.filter((i) => i.featured),
  ...menu.find((c) => c.key === 'rice')!.items.filter((i) => i.featured),
  ...menu.find((c) => c.key === 'poultry')!.items.filter((i) => i.featured),
];

/** Format integer IDR like "Rp 40" — no decimals, no locale. */
export function formatIDR(n: number): string {
  return `Rp ${n}`;
}
