import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartItemList, CartTotal, SectionTitle } from "../components";

Cart;
export default function Cart() {
  let user = 41;
  const numberOfItems = useSelector((state) => state.cartState.numberOfItems);
  if (numberOfItems == 0) {
    return <SectionTitle text="Your Cart is Empty" />;
  }

  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotal />
          {user ? (
            <Link to="/checkout" className="btn btn-primary btn-block mt-8 ">
              Proceed to Checkout
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary btn-block mt-8 ">
              Please Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
