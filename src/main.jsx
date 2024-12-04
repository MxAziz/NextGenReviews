import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import './index.css'
import MainLayout from './components/MainLayout.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Home from './components/outlets/homeroute/Home.jsx';
import AllReviews from './components/outlets/reviewsRoute/AllReviews.jsx';
import AddReview from './components/outlets/reviewsRoute/AddReview.jsx';
import GameWatchList from './components/outlets/watchList/GameWatchList.jsx';
import MyReviews from './components/outlets/reviewsRoute/MyReviews.jsx';
import Login from './components/outlets/AuthRoute/Login.jsx';
import Resister from './components/outlets/AuthRoute/Resister.jsx';
import AuthProvider from './provider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allReviews',
        element: <AllReviews></AllReviews>
      },
      {
        path: '/addReview',
        element: <AddReview></AddReview>
      },
      {
        path: '/myReviews',
        element: <MyReviews></MyReviews>
      },
      {
        path: '/gameWatchList',
        element: <GameWatchList></GameWatchList>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/resister',
        element: <Resister></Resister>
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
        theme="colored"
      />
    </AuthProvider>
  </StrictMode>
);
