'use client';

import { useEffect, useState } from react;
import ProductCard from '../../components/ProductCard';
import { getFavorites } from '../../lib/favorites';

export default function FavoritesPage() {
  const [products, setProducts] = useState([]);
  const [favIds, setFavIds] = useState([]);

  useEffect(() => {
    const ids = getFavorites();
    setFavIds(ids);

    async function load() {
      const res = await fetch('https://fakestoreapi.com/products');
      const all = await res.json();
      setProducts(all.filter(p => ids.includes(p.id)));
    }

    load();
  }, []);

  return (
    <div>
      <h1>Favorite Products</h1>

      <div style={{
        display: grid,
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 20
      }}>
        {products.map(p => (
          <ProductCard product={p} key={p.id} />
        ))}
      </div>
    </div>
  );
}