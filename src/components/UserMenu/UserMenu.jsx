import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { apiLogoutUser } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);
const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(apiLogoutUser());
  };

  return (
    <>
      <NavLink to="/contacts" className={buildCssClasses}>
        Contacts
      </NavLink>
      <div className={css.userMenu}>
        <span className={css.greeting}>Hello, {user.name}</span>
        <button type="button" onClick={handleLogout} className={css.logoutBtn}>
          Logout
        </button>
      </div>
    </>
  );
};

export default UserMenu;
