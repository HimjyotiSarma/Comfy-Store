import { Filter, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

export const loader = async ({ request }) => {
  try {
    const response = await customFetch("/products");
    const products = response.data.data;
    const meta = response.data.meta;
    console.log(response);
    return { products, meta };
  } catch (error) {
    console.log(error.message);
    throw new Error(
      error?.message || "Something went wrong when fetching data from Server",
    );
  }
};

export default function Products() {
  return (
    <>
      <Filter />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}
