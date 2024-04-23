import { useSelector } from "react-redux";
import { formatPrice } from "../utils";
const CartTotal = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState,
  );

  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {/* SUBTOTAL */}
        <p className="flex justify-between border-b border-base-300 pb-2 text-xs">
          <span>Subtotal</span>
          <span>{formatPrice(cartTotal)}</span>
        </p>
        {/* SHIPPING */}
        <p className="flex justify-between border-b border-base-300 pb-2 text-xs">
          <span>Shipping</span>
          <span>{formatPrice(shipping)}</span>
        </p>
        {/* TAX */}
        <p className="flex justify-between border-b border-base-300 pb-2 text-xs">
          <span>Tax</span>
          <span>{formatPrice(tax)}</span>
        </p>
        {/* ORDER TOTAL */}
        <p className="mt-4 flex justify-between pb-2 text-sm">
          <span>OrderTotal</span>
          <span>{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
};
export default CartTotal;
