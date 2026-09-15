import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Leaf, Package, Heart } from 'lucide-react';
import { getProducts } from '@/lib/catalog';
import { ProductCard } from '@/components/product-card';
import { Newsletter } from '@/components/newsletter';
export default async function Home() {
  const products = await getProducts();
  const featured = products.filter((p) => p.featured).slice(0, 3);
  const newest = products.slice(0, 3);
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Made personal, stitch by stitch</span>
          <h1>
            Your story,
            <br />
            <em>stitched to last.</em>
          </h1>
          <p>
            Embroidered goods for teams, milestones, gifts, and the everyday moments worth keeping.
          </p>
          <Link className="button" href="/shop">
            Shop embroidered goods <ArrowRight size={16} />
          </Link>
          <span className="hero-number">THE RALLY COLLECTION &nbsp; / &nbsp; VOL. 01</span>
        </div>
        <div className="hero-media">
          <Image
            src={
              products[0]?.product_images[0]?.url ||
              'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1400&q=85'
            }
            alt="An embroidered everyday layer in natural light"
            fill
            priority
            sizes="(max-width: 700px) 100vw, 55vw"
          />
          <Link
            href={products[0] ? `/products/${products[0].slug}` : '/shop'}
            className="hero-caption"
          >
            <span>Made personal. Worn proudly.</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <div className="container promise-strip">
        <div>
          <Leaf size={15} />
          <span>Thoughtfully designed. Carefully stitched.</span>
        </div>
        <div>
          <Package size={15} />
          <span>A little care in every order.</span>
        </div>
        <div>
          <Heart size={15} />
          <span>Your story, stitched to last.</span>
        </div>
      </div>
      <section className="container section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The pieces you’ll reach for</p>
            <h2>Meet your daily favorites.</h2>
          </div>
          <Link className="text-link" href="/shop">
            Shop all <ArrowRight size={15} />
          </Link>
        </div>
        <div className="product-grid featured-grid">
          {featured.length ? (
            featured.map((p) => <ProductCard key={p.id} product={p} />)
          ) : (
            <p className="muted">
              Our next collection is on its way. Join the newsletter to hear first.
            </p>
          )}
        </div>
      </section>
      <section className="story">
        <div className="story-image">
          <Image
            src={
              products[2]?.product_images[0]?.url ||
              products[0]?.product_images[0]?.url ||
              'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1400&q=85'
            }
            alt="The texture and detail of embroidered apparel"
            fill
            sizes="(max-width: 700px) 100vw, 50vw"
          />
        </div>
        <div className="story-copy">
          <p className="eyebrow">A more personal kind of favorite</p>
          <h2>
            Meaningful details.
            <br />
            Made to rally around.
          </h2>
          <p>
            We’re here for the pieces that carry a team, a place, a milestone, or an inside story
            wherever you go.
          </p>
          <p>Everyday goods, made unmistakably yours.</p>
          <Link href="/about" className="text-link mt-3">
            A little about us <ArrowRight size={15} />
          </Link>
        </div>
      </section>
      <section className="container section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Freshly in the fold</p>
            <h2>A new kind of familiar.</h2>
          </div>
          <Link className="text-link" href="/shop?sort=newest">
            New arrivals <ArrowRight size={15} />
          </Link>
        </div>
        <div className="product-grid featured-grid">
          {newest.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
      <Newsletter />
    </>
  );
}
