import { Form, useLoaderData, Link } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckBox from "./FormCheckBox";

const Filter = () => {
  const { meta, params } = useLoaderData();
  const { category, company, order, price, search, shipping } = params;
  console.log(params);
  return (
    <Form className="grid items-center gap-x-4 gap-y-8 rounded-md bg-base-200 px-8 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      {/* CATEGORIES */}
      <FormSelect
        label="select caterory"
        name="category"
        list={meta.categories}
        size="select-sm"
        defaultValue={category}
      />
      {/* COMPANIES */}
      <FormSelect
        label="select company"
        name="company"
        list={meta.companies}
        size="select-sm"
        defaultValue={company}
      />
      {/* ORDER */}
      <FormSelect
        label="sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue={order}
      />
      {/* FORM RANGE */}
      <FormRange
        name="price"
        label="select price"
        range="range-sm"
        defaultValue={price}
      />

      {/* FORM CHECKBOX */}
      <FormCheckBox
        name="shipping"
        label="free shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />
      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm">
        Search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        Reset
      </Link>
    </Form>
  );
};
export default Filter;
