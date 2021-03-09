import s from './Notification.module.css';

function Notification() {
  return (
    <div className={s.container}>
      <h3>Warning</h3>
      <p>This contact is already on the list.</p>
    </div>
  );
}

export default Notification;
