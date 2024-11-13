import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";
const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);
const AuthNav = () => (
  <div className={css.authNav}>
    <NavLink to="/login" className={buildCssClasses}>
      Login
    </NavLink>
    <NavLink to="/register" className={buildCssClasses}>
      Register
    </NavLink>
  </div>
);

export default AuthNav;
