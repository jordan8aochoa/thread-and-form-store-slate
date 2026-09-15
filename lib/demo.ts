import type { Product, StoreSettings } from '@/lib/types';
export const defaultSettings: StoreSettings = {
  id: 'store',
  brand_name: 'RallyThreads',
  tagline: 'Your story, stitched to last.',
  logo_url: '',
  support_email: 'hello@example.com',
  owner_email: 'owner@example.com',
  return_address: {
    name: 'RallyThreads',
    street1: '123 Example Street',
    street2: '',
    city: 'Chicago',
    state: 'IL',
    zip: '60601',
    country: 'US',
  },
  free_shipping_threshold_cents: 20000,
  announcement: 'Custom embroidery, made for the moments worth rallying around.',
  social_links: {},
};
const names = [
  'The Rally Crew',
  'The Club Cardigan',
  'The Heritage Cable',
  'The Studio Mockneck',
  'The Varsity Polo',
  'The Sunday V-neck',
];
const slugs = [
  'everyday-crew',
  'weekend-cardigan',
  'alpine-cable',
  'studio-mockneck',
  'soft-rib-polo',
  'sunday-v-neck',
];
const prices = [9800, 14800, 12800, 11800, 10800, 9800];
const shades = ['Oat', 'Moss', 'Cloud', 'Charcoal', 'Clay', 'Walnut'];
const photos = [
  '/images/knit-05.jpg',
  '/images/knit-06.jpg',
  '/images/knit-04.jpg',
  '/images/knit-01.jpg',
  '/images/knit-05.jpg',
  '/images/knit-06.jpg',
];
export const demoProducts: Product[] = names.map((name, i) => {
  const id = `10000000-0000-4000-8000-${String(i + 1).padStart(12, '0')}`;
  return {
    id,
    name,
    slug: slugs[i],
    description:
      'An easy layer with room for a story of your own. Soft, substantial, and finished with thoughtful proportions, it is designed to showcase embroidered details and settle into your everyday rotation.\n\nDemo product: replace this description, materials, embroidery details, care instructions, and photography with verified information before launch.',
    category: i === 1 ? 'Cardigans' : i === 4 ? 'Polos' : 'Sweaters',
    price_cents: prices[i],
    sale_price_cents: i === 4 ? 8800 : null,
    active: true,
    featured: i < 3,
    seo_title: name,
    seo_description: 'An embroidered everyday favorite from RallyThreads.',
    created_at: `2026-09-0${6 - i}T12:00:00Z`,
    product_images: [
      {
        id: `img-${i}`,
        product_id: id,
        url: photos[i],
        alt: `${name} — sample knitwear photography`,
        position: 0,
      },
      {
        id: `img-${i}-2`,
        product_id: id,
        url: photos[(i + 2) % 6],
        alt: 'Sample knitwear detail',
        position: 1,
      },
    ],
    product_variants: ['XS', 'S', 'M', 'L', 'XL'].flatMap((size, j) =>
      [shades[i], i % 2 ? 'Oat' : 'Charcoal'].map((color, k) => ({
        id: `20000000-0000-4000-8000-${String((i + 1) * 100 + j * 2 + k).padStart(12, '0')}`,
        product_id: id,
        size,
        color,
        sku: `RT-${i + 1}-${size}-${k}`,
        price_override_cents: null,
        inventory_quantity: i === 5 ? 0 : j === 2 ? 3 : 12,
        weight_oz: 18 + i * 2,
        active: true,
      })),
    ),
  };
});
