import { Link } from "react-router-dom";
import { ROUTE } from "../../routes";

export const Menu = () => {
  return (
    <div className="mb-8">
      <ul className="flex list-none">
        <li className="mr-3">
          <Link to={ROUTE.ROOT.path}>Home</Link>
        </li>
        <li className="mr-3">
          <Link to="/about">About</Link>
        </li>
        <li className="mr-3">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
