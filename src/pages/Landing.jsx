import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils/index.jsx";
export const loader = async () => {
  const url = "/products/?featured=true";
  const response = await customFetch(url);
  const products = response.data.data;
  return { products };
};

export default function Landing() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}
