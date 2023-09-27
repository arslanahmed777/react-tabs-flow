import React from "react"
import './App.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Layout from './Common/Layout';
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import LoginPage from './Pages/LoginPage/LoginPage';
// const RequireAuth = ({ children }) => {
//   let token = useSelector((state) => state.userAuth.userinfo.token);

//   if (!token) {
//     return <Navigate to="/login" />;
//   }
//   return children;
// }
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />
      },

    ]
  },
  {
    path: "about",
    element: <AboutPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
function App() {
  return (



    <RouterProvider router={router} />

  );
}

export default App;
