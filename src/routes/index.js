import App from '../App';
import Body from '../components/Body';
import About from '../pages/About';
import Contact from '../pages/Contact';
import ErrorPage from '../pages/ErrorPage';
import Cart from '../RestorantCard/cart';

import RestaurantMenu from '../RestorantCard/RestaurantMenu';

const routesConfig = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/card",
        element:<Cart />
      },
      {
        path: "/restaurant/:restId",
        element:<RestaurantMenu />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routesConfig;
