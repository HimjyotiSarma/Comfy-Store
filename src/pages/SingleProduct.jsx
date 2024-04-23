import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { customFetch, formatPrice, generateAmount } from "../utils/index.jsx";
import { addItems } from "../features/cart/cartSlice.js";
import { useDispatch } from "react-redux";

export const loader = async ({ params }) => {
  try {
    const response = await customFetch(`/products/${params.id}`);
    const product = await response.data.data;
    console.log(product);
    return { product };
  } catch (error) {
    throw new Error(error);
  }
};

export default function SingleProduct() {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product?.attributes || "";
  const dollarsAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, selectAmount] = useState(1);

  const handleAmount = (e) => {
    selectAmount(e.target.value);
  };

  const dispatch = useDispatch();

  let cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    company,
    productColor,
    amount,
  };
  const addToCart = () => {
    dispatch(addItems({ product: cartProduct }));
  };
  return (
    <section>
      {/* BREADCRUMBS */}
      <div className="breadcrumbs text-base">
        <ul>
          <li>
            <Link to="/">Back Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="size-96 rounded-lg object-cover lg:w-full"
        />
        {/* INFO */}
        <div>
          <h1 className="text-3xl font-bold capitalize">{title}</h1>
          <h4 className="mt-2 text-xl font-bold text-neutral-content">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/* COLORS */}
          <div>
            <h4 className="mt-3 text-xl font-medium capitalize tracking-wider">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    className={`badge mr-2 size-6 ${color === productColor ? "border-2 border-secondary" : ""}`}
                    type="button"
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>
          {/* AMOUNT */}
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="amount">
              <h4 className="text-xs font-medium capitalize tracking-wider">
                amount
              </h4>
            </label>
            <select
              name="amount"
              id="amount"
              className="select select-bordered select-secondary select-md"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmount(5)}
            </select>
          </div>
          <div className="mt-10">
            <button
              type="button"
              className="btn btn-secondary btn-md"
              onClick={addToCart}
            >
              Add to Bag
            </button>
          </div>
          {/* CART BUTTON */}
        </div>
      </div>
    </section>
  );
}
