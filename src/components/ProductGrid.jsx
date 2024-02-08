import { useLoaderData, Link } from "react-router-dom";
export default function ProductGrid() {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <div className="grid gap-4 pt-12 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        return (
          <Link
            key={product.id}
            to={`products/${product.id}`}
            className="card w-full shadow-xl transition duration-300 hover:shadow-2xl"
          >
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt={title}
                className="h-64 w-full rounded-xl object-cover md:h-48"
              />
            </figure>
            <div className="card-body items-center text-center">
              <div className="card-title capitalize tracking-wider">
                {title}
              </div>
              <span className="text-secondary">₹{price}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
