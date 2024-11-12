import { createBrowserRouter } from "react-router-dom";
import Home from "../ecommerce/home/pages/Home.jsx";
import Products from "../ecommerce/products/pages/Products.jsx";
import Prices from "../ecommerce/prices/pages/Prices.jsx";
import Orders from "../ecommerce/orders/pages/Orders.jsx";
import Payments from "../ecommerce/payments/pages/Payments.jsx";
import Shippings from "../ecommerce/shippings/pages/Shippings.jsx";
//FIC: Share 
import Error from "../share/errors/pages/Errors.jsx";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
      children: [
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/prices",
          element: <Prices />,
        },
        {
            path: "/orders",
            element: <Orders />,
        },
        {
            path: "/payments",
            element: <Payments />,
        },
        {
            path: "/shippings",
            element: <Shippings />,
        },
      ], 
    },
  ]);
  export default router;