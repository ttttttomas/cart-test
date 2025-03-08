import Cart from "./Cart";
import Products from "./Products";
import data from "./products.json";

export default async function HomePage() {
  return (
    <main>
      <h1 className="my-10 text-center text-4xl font-bold">Products</h1>
      <Products data={data} />
      <Cart />
    </main>
  );
}
