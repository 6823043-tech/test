import ProductCard from "./components/ProductCard";
import Header from "./components/Header";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div>
      <h1>Fake Store Products</h1>

      <div
        style={{
          display: "grid",

          gridTemplateColumns: "repeat(4,1fr)",
          gap: 20,
        }}
      >
        {products.map((p) => (
          <ProductCard product={p} key={p.id} />
        ))}
      </div>
    </div>
  );
}
