import { useRouteError, Link } from 'react-router-dom'

export default function Error() {
  const error = useRouteError()

  if (error.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-8 ">
        <div className="text-center">
          <h1 className="text-9xl font-semibold text-primary">404</h1>
          <p className="mt-4 text-3xl tracking-tight font-bold sm:text-5xl">
            Page Not Found
          </p>
          <p className="mt-6 text-lg leading-7">
            Sorry, We couldn't find the page you are looking for.
          </p>
          <div className="mt-10">
            <Link
              to="/"
              className="btn btn-primary uppercase hover:btn-success hover:text-white"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="grid min-h-[100vh] place-items-center px-8 ">
      <div className="text-center">
        <h4 className="text-3xl tracking-tight font-bold sm:text-5xl">
          There was some error
        </h4>
      </div>
    </main>
  )
}
