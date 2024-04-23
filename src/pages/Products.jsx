import { Filter, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

export const loader = async ({ request }) => {
  try {
    // METHOD 1
    // const params1 = [...new URL(request.url).searchParams];
    // console.log(params1);
    // const search = params.get("search");
    // METHOD 2 : Get All Params in Key Value Pair
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    const response = await customFetch("/products", {
      params,
    });
    const products = response.data.data;
    const meta = response.data.meta;
    return { products, meta, params };
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
