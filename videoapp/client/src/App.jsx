import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Login, Video } from "./Pages";
import { Navbar, Menu } from "./Components";
import './Styles/Global.scss';

const App = () => {
  const Layout = () => {
    return (
      <div className="main">
        {/* dutmmy text */}
        <Navbar />
        <div className="container">
          <div className="menuContainer">

  
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
            {/* Subhan allah */}
          </div>
        </div>
      </div>
    );
  };


const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/video/:id",
        element: <Video />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  
]);

return <RouterProvider router={router}/>
};
export default App;
