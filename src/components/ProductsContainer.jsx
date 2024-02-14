import { useState } from "react";
import { ProductGrid, ProductList } from ".";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const totalProducts = meta?.pagination?.total;

  const [layout, setLayout] = useState("grid");

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${pattern == layout ? "btn-primary text-primary-content" : "btn-ghost text-based-content"}`;
  };

  return (
    <>
      {/* HEADER  */}
      <div className="mt-8 flex items-center justify-between border-b border-x-base-200 pb-4">
        <h4 className="text-base font-medium">
          {totalProducts} product{totalProducts > 1 && "s"}
        </h4>
        <div className="flex gap-x-2">
          <button
            type="button"
            className={setActiveStyles("grid")}
            onClick={() => setLayout("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            type="button"
            className={setActiveStyles("list")}
            onClick={() => setLayout("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      {/* PRODUCTS */}
      {totalProducts === 0 ? (
        <h5 className="mt-16 text-2xl">
          Sorry, No Product matched your search...
        </h5>
      ) : layout === "grid" ? (
        <ProductGrid />
      ) : (
        <ProductList />
      )}
    </>
  );
};
export default ProductsContainer;
