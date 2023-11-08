import { Link, Outlet } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <p>&copy; 2023 Ocado Krk</p>
    </div>
  );
};

export const Layout = () => {
  return (
    <div>
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
};
