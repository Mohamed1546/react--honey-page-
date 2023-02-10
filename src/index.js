import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

import Home from './pro/home';
import Ourproducts from './pro/ourproducts';
import Callus from './pro/callus';
import Aboutus from './pro/aboutus';
import Reviews from './pro/reviews';
const router = createBrowserRouter([
  {
    path: "/",
    element:  <Home /> ,
  },
  {
    path: "/منتجاتنا",
    element:  <Ourproducts /> ,
  },
  {
    path: "/اتصل بنا",
    element:  <Callus /> ,
  },
  {
    path: "/من نحن",
    element:  <Aboutus /> ,
  },
  {
    path: "/اراء العملاء",
    element:  <Reviews /> ,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
