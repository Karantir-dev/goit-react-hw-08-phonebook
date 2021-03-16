import defaultAvatar from './default-avatar.png';

function UserMenu() {
  return (
    <div>
      <img src={defaultAvatar} alt="" width="32" />
      <span>Welcome, </span>
      <button type="button" /*onClick={onLogout}*/>Logout</button>
    </div>
  );
}

export default UserMenu;
