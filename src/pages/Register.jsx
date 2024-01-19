import { Form, Link } from "react-router-dom";
import { SubmitBtn, FormInput } from "../components";

export default function Register() {
  return (
    <section className="grid h-svh place-items-center">
      <Form
        method="POST"
        className="card flex w-96 flex-col gap-y-4 bg-base-100 p-8 shadow-lg "
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type="text" name="username" label="username" />
        <FormInput type="email" name="email" label="email" />
        <FormInput type="password" name="password" label="password" />
        <div className="mt-4">
          <SubmitBtn text="Register" />
        </div>
        <p className="text-center">
          Already a User?
          <Link
            to="/login"
            className="link-hover link link-primary ml-2 capitalize"
          >
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
}
