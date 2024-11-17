import { Link } from 'react-router-dom';
import style from './Navigation.module.css';
import { Flex } from 'antd';
import NavLink from '../customComponents/Link/Link';

const Navigation = () => {
  return (
    <nav className={style.navigation}>
      <Link className={`${style.baseUrl} ${style.link}`} to="/">
        String Art
      </Link>

      <Flex gap="10px">
        <NavLink to="/">Market Place</NavLink>
        <NavLink to="/generator">Creator</NavLink>
        <NavLink to="/collections">Collection</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </Flex>

      <Flex>
        <NavLink className={style.link} to="/login">
          Login
        </NavLink>
      </Flex>
    </nav>
  );
};

export default Navigation;
