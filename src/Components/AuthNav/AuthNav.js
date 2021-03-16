import { NavLink } from 'react-router-dom';

import s from './AuthNav.module.css';

function AuthNav() {
  return (
    <nav className={s.nav}>
      <NavLink to="/login">LogIn</NavLink>
      <NavLink to="/register">Register</NavLink>
    </nav>
  );
}

export default AuthNav;
