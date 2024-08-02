import styles from "./Navigation.module.css"
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className={styles.headRow}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : styles.text)}
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? styles.active : styles.text)}
      >
        Movies
      </NavLink>
    </nav>
  );
}


export default Navigation;
