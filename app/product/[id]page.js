import ProductCard from "../../../components/ProductCard";

async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);

  return (
    <div style={{ padding: 20 }}>
      <h1>{product.title}</h1>

      <img src={product.image} width={250} />
      <p>{product.description}</p>
      <p>
        <b>Price:</b> ${product.price}
      </p>

      <ProductCard product={product} />
    </div>
  );
}
