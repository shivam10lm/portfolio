import React, { useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  NavLink,
  Link,
  Outlet,
  useLocation
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Work from "./Components/Work";


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

const Root = () => {
  return (
    <>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

const NavBar = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === '/About'; // Check if current page is About

  const [menuOpen, setMenuOpen] = useState(false);
  

  return (

 <nav style={{background: isAboutPage ? "#111111" : "white", zIndex: "4"}}>
        <Link
          style={{
            margin: "30px",
            fontSize: "30px",
            letterSpacing: "0px",
            fontWeight: "bold",
            textDecoration: "none",
            color: isAboutPage ? "white" : "black",
           // Change text color to white on About page
          }}
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          {" "}
          Shivam Gupta{" "}
        </Link>

      <div
        style={{margin: "30px"
        }}
        className="menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span style={{background: isAboutPage ? "white" : "black"}}></span>
        <span style={{background: isAboutPage ? "white" : "black"}}></span>
        <span style={{background: isAboutPage ? "white" : "black"}}></span>
      </div>
        <ul className={menuOpen ? "open" : ""} style={{background: isAboutPage ? "#111111": "white"}}>
        
        <li>
        <NavLink
          className="nav-el"
          to="/Work"
          style={{ color: isAboutPage ? "white" : "black"}} // Change text color to white on About page
          onClick={() => setMenuOpen(false)}
        >
          Work
        </NavLink>
        </li>
        <li>
        <NavLink
          className={isAboutPage ? "nav-el about" : "nav-el"} // Apply different class for About page
          to="/About"
          style={{ color: isAboutPage ? "white" : "black" }} // Change text color to white on About page
          onClick={() => setMenuOpen(false)}
        >
          About
        </NavLink>
        </li>
        <li>
        <NavLink
          className="nav-el"
          to="/Contact"
          style={{ color: isAboutPage ? "white" : "black" }} // Change text color to white on About page
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </NavLink>
        </li>
        
        </ul>
      </nav>
    
  );
};

export default App;
