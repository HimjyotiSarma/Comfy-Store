import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  About,
  Register,
  SingleProduct,
} from './pages'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
        {
          path: '/checkout',
          element: <Checkout />,
        },
        {
          path: '/orders',
          element: <Orders />,
        },
        {
          path: '/products',
          element: <Products />,
        },
        {
          path: '/products/:id',
          element: <SingleProduct />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: '/register',
      element: <Register />,
      errorElement: <Error />,
    },
  ])

  return <RouterProvider router={router}></RouterProvider>
}

export default App
