import useAuth from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import css from './UserMenu.module.css';
const UserMenu = () => {
  const { user } = useAuth();

  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <p className={css.username}> {user.email}</p>
      <button onClick={() => dispatch(logOut())} className={css.btn}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
