import type { Metadata } from 'next';
import { getProducts } from '@/lib/catalog';
import { Shop } from '@/components/shop';
export const metadata: Metadata = {
  title: 'The collection',
  description: 'Shop embroidered layers and personalized everyday goods from RallyThreads.',
};
export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ sort?: string; q?: string; focus?: string }>;
}) {
  const params = await searchParams;
  return (
    <div className="container">
      <div className="page-intro">
        <p className="eyebrow">Good things, on repeat</p>
        <h1>The everyday collection.</h1>
        <p>Personal details, carefully stitched. Easy to wear, easy to love.</p>
      </div>
      <Shop
        products={await getProducts()}
        initialSort={params.sort}
        initialSearch={params.q}
        focusSearch={params.focus === 'search'}
      />
    </div>
  );
}
