import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
export default function Login() {
  return (
    <section className="grid h-screen place-items-center">
      <Form
        method="post"
        className="card flex w-96 flex-col gap-y-4 bg-base-100 p-8 shadow-lg"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          name="identifier"
          defaultValue="test@test.com"
          label="email"
        />
        <FormInput
          type="password"
          name="password"
          defaultValue="secret"
          label="password"
        />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button type="button" className="btn btn-secondary btn-block">
          guest login
        </button>
        <p className="text-center">
          Not a member yet?{" "}
          <Link
            to="/register"
            className="link-hover link link-primary ml-2 capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
}
