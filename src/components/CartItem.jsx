import { formatPrice, generateAmount } from "../utils";
import { removeItem, editItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    dispatch(removeItem({ itemID: cartID }));
  };

  const handleAmount = (e) => {
    console.log(e.target.value);
    dispatch(editItem({ itemID: cartID, amount: parseInt(e.target.value) }));
  };
  const { cartID, image, title, price, company, productColor, amount } =
    cartItem;
  return (
    <article
      key={cartID}
      className="mb-12 flex flex-col flex-wrap gap-y-4 border-b border-base-300 pb-6 last:border-b-0 sm:flex-row"
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="size-24 rounded-lg object-cover sm:size-32"
      />
      {/* INFO */}
      <div className="sm:ml-12 sm:w-48">
        {/* TITLE */}
        <h3 className="font-medium capitalize">{title}</h3>
        {/* COMPANY */}
        <h4 className="mt-2 text-sm capitalize text-neutral-content">
          {company}
        </h4>
        {/* COLOR */}
        <p className="mt-4 flex items-center gap-x-2 text-sm capitalize">
          color:
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-24">
        {/* AMOUNT */}
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            className="select-base select select-bordered select-xs mt-2"
            value={amount}
            onChange={handleAmount}
          >
            {/* {console.log(parseInt(amount))} */}
            {generateAmount(parseInt(amount) + 5)}
          </select>
        </div>
        {/* REMOVE */}
        <button
          className="link-hover link link-primary mt-2 text-sm"
          onClick={removeItemFromCart}
        >
          remove
        </button>
      </div>

      {/* PRICE */}
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};
export default CartItem;
