import { NavLink } from 'react-router-dom';

import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

import s from './AppBar.module.css';

function AppBar() {
  return (
    <div className={s.container}>
      <nav className={s.nav}>
        <NavLink to="/" className={s.home}>
          Home
        </NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
      <AuthNav />

      {/* {isAuthorized ? <UserMenu/>: <AuthNav/>} */}
    </div>
  );
}

export default AppBar;
