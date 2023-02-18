import classes from "../assets/css/Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from '../store/index'


const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuthentication);
  const dispatch = useDispatch()

  const logoutFunction = () => {
    dispatch(authActions.Logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutFunction}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
