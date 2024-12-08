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
import ReviewDetails from './components/outlets/reviewsRoute/ReviewDetails.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import UpdateReview from './components/outlets/reviewsRoute/UpdateReview.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allReviews",
        element: <AllReviews></AllReviews>,
        loader: () => fetch("https://chill-gamer-server-liart.vercel.app/games"),
      },
      {
        path: "/addReview",
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateReview/:id",
        element: <PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>
      },
      {
        path: "/review/:id",
        element: (
          <PrivateRoute>
            <ReviewDetails></ReviewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://chill-gamer-server-liart.vercel.app/games/${params.id}`),
      },
      {
        path: "/gameWatchList",
        element: (
          <PrivateRoute>
            <GameWatchList></GameWatchList>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/resister",
        element: <Resister></Resister>,
      },
    ],
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
