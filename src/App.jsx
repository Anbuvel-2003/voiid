import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactUs from "./pages/contact";
import Home from "./pages/home";
import Aboutus from "./pages/aboutus";
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
import UIandUX from './pages/services/uiandux';
import Websitedevelopement from './pages/services/websitedevelopement';
import Mobileapp from './pages/services/mobileappdevelopement';
import Testing from './pages/services/testingservice';
import Devops from './pages/services/Devopservices';
import Digital from './pages/services/digitalmarketing';
import Social from './pages/services/socialmedia';
import Branding from './pages/services/branding';
import Portfolio from './pages/portfolio';

function Layout() {
  return (
    <>
      {/* <NavBar /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/uiuxdevelopement",
        element: <UIandUX/>,
      },
      {
        path: "/websitedevelopement",
        element: <Websitedevelopement/>,
      },
      {
        path: "/mobileappdevelopement",
        element: <Mobileapp/>,
      },
      {
        path: "/testingservices",
        element: <Testing/>,
      },
      {
        path: "/devopsservices",
        element: <Devops/>,
      },
      {
        path: "/digitalmarketing",
        element: <Digital/>,
      },
      {
        path: "/socialmediamarketing",
        element: <Social/>,
      },
      {
        path: "/branding",
        element: <Branding/>,
      },
      {
        path: "/portfolio",
        element: <Portfolio/>,
      },
      {
        path: "/Contactus",
        element: <ContactUs/>,
      },
      {
        path: "/AboutUs",
        element: <Aboutus />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      }
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
