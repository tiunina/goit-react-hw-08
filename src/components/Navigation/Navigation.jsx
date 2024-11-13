import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);
const Navigation = () => {
  return (
    <div>
      <nav className={css.header}>
        <NavLink to="/" className={buildCssClasses}>
          Home
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
